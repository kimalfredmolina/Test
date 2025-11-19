import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from "./component/Navbar.jsx";
import Homepage from "./component/Homepage.jsx";
import Aboutus from "./component/Aboutus.jsx";
import ContactUs from "./component/Contactus.jsx"
import Footer from "./component/Footer.jsx";

import Login from "./authentication/Login.jsx"
import SignUp from "./authentication/SignUp.jsx";


const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

  return (
    <div className="relative z-10">
      {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={
            <>
              <Homepage />
              <Aboutus />
              <ContactUs />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {showNavbar && <Footer />}
    </div>
  )
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
