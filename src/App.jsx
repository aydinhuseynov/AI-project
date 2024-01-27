import '../src/assets/css/app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./companents/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./companents/Fotter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./companents/Home";
import About from "./companents/About";
import FAQ from "./companents/FAQ";
import LoginSignup from './companents/LoginSignup';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path='/loginSignup' element={<LoginSignup/>}/>
        </Routes>

      

        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
