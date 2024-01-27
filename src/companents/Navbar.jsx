import Logo from "../assets/images/logo.svg";
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import styles from "../assets/css/navbar.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
const overlayMenu =useRef();

const openOverlayMenu = ()=>{overlayMenu.current.style.width = "100%"}
const closeOverlayMenu = ()=>{overlayMenu.current.style.width = "0%"}

  return (
   <>
<div ref={overlayMenu} className={`${styles.overlayMenu}`}>
  
<GiCrossMark onClick={closeOverlayMenu} className={`${styles.x_Icon}`} />

<nav className={`${styles.nav_links}`}>
  <Link to="/" className="nav-link text-white">Home</Link>
  <Link to="/about" className="nav-link text-white">About</Link>
  <a href="" className="nav-link text-white">Services</a>
  <a href="" className="nav-link text-white">Contact</a>
  <Link to="/faq" className="nav-link text-white" >FAQ</Link>
  <button className="btn btn-outline-primary mt-2"><Link to="/loginSignup" className={`${styles.signUP}`}>Sign up</Link></button>

</nav>

</div>
<nav className={`navbar navbar-expand-lg  ${styles.navbarBgColor}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} className={`${styles.logoNavbar}`} />
        </a>
        <button
onClick={openOverlayMenu}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineBars className={`${styles.navbarIcon}`} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Conatc
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/faq">
                FAQ 
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary"><Link to="/loginSignup" className={`${styles.signUP}`}>Sign up</Link></button>
        </div>
      </div>
    </nav>

   </>
  );
}

export default Navbar;
