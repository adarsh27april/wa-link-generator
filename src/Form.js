import React from 'react'
import { useState } from 'react';
import intlTelInput from 'intl-tel-input';


const Form = () => {

   const [phoneNum, setPhoneNum] = useState();
   const [WA_url, setWA_url] = useState(null);
   const [check, setCheck] = useState(false);

   const generateLink = () => {
      let strNum = `${phoneNum}`
      let finalPhoneNum = 0;
      for (let i = 0; i < strNum.length && i < 15; i++) {
         if (strNum.charAt(i) >= '0' && strNum.charAt(i) <= '9') {
            finalPhoneNum = finalPhoneNum * 10 + (strNum.charCodeAt(i) - "0".charCodeAt(0));
         }
      }
      console.log(`finalPhoneNum : ${finalPhoneNum}`);
      setWA_url(`https://wa.me/${finalPhoneNum}`);
      setCheck(true);
   }

   return (<>
      {/* <form> */}

      Enter phone No. with Country Code:<br />
      +91 xxxxx xxxxx
      <br />
      <div className="form-floating mb-3">
         <input type="tel" className="form-control"
            id="floatingInput" placeholder="name@example.com"
            value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}
         />
         <label htmlFor="floatingInput">Phone</label>
         <br />
      </div>

      <button className="w-50 btn btn-lg btn-success mb-3" onClick={generateLink}>Submit</button>

      {
         check &&
         <div className='mb-5'>
            <a className="btn btn-secondary mb-2" href={WA_url} target="_blank">Whatsapp Link</a>
            <br />
            your whatsapp link is :<br />
            {WA_url}
         </div>
      }


   </>)
}

export default Form
