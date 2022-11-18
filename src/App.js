import React from 'react'
import Form from './Form'

const App = () => {
   return (<>
      <nav className="navbar navbar-dark bg-dark m-1"
         style={{ borderRadius: "10px" }}
      >

         <div className="container-fluid">
            <a className="navbar-brand" >
               Whatsapp Number Link genrator
            </a>
         </div>
      </nav>
      <div className='text-center mt-5'>
         <main className=' w-50 m-auto'>
            <Form />
         </main>
      </div>
   </>)
}

export default App;
