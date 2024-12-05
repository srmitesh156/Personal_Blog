import Form from './comp/pages/Form'
import ViewUser from './comp/pages/ViewUser'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './comp/layout/Header';
import Footer from './comp/layout/Footer';
import UpdateUser from './comp/pages/UpdateUser';




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
