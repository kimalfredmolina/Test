import Homepage from "./component/Homepage.jsx";
import Aboutus from "./component/Aboutus.jsx";
import Footer from "./component/Footer.jsx";
import ContactUs from "./component/Contactus.jsx"

import Login from "./authentication/Login.jsx"
import SignUp from "./authentication/SignUp.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {

  return (
  <div>
    <Navbar />
    <Homepage />
    <Aboutus />
    <ContactUs />
    <Login />
    <Footer />
  </div>
  )
}

export default App
