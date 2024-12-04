import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './comp/pages/Form'
import ViewUser from './comp/pages/ViewUser'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './comp/layout/Header';
import Footer from './comp/layout/Footer';
import './comp/pages/style.css'
import UpdateUser from './comp/pages/UpdateUser';


// function App() {

//   return (
//     <>
//       {/* <Form/> */}
//       <Router>
//         <Header/>
//         <Routes>
//          <Route path="/" element={<Form/>} /> 
//           <Route path="/ViewUser" element={<ViewUser/>} />
//            {/* <Route path="/Pages" element={<Form/>} />  */}
//           {/* <Route path="/Blogs" element={<Form/>} /> */}
//            {/* <Route path="/contact" element={< Form/>} />  */}
//         </Routes>
//         <Footer/>
//       </Router >
//        {/* <ViewUser/> */}
//     </>
//   )
// }

// export default App

function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ViewUser" element={<ViewUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
