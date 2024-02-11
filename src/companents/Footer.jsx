// import fotterLogo from "../assets/images/fotter.svg";
// import { MdMailOutline } from "react-icons/md";
// import { FiPhoneCall } from "react-icons/fi";
// import { CiLocationOn } from "react-icons/ci";
// import { IoLogoFacebook } from "react-icons/io5";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { CiGlobe } from "react-icons/ci";
// import { FaSquareTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";

import logoFooter from '../assets/images/fotterLogo.svg'


import '../assets/css/footer.css'

const Fotter = () => {
  return (
//     <div classNameName="fotter-section">
//       <div classNameName="contact-info">
//         <img src={fotterLogo} alt="" />
//         <p>
//           Lorem ipsum is placeholder text <br />
//           commonly used in the graphic, print,
//           <br /> and layouts and visual mockups.
//         </p>
//         <p>
//           <MdMailOutline /> <a href="#">Company@gmail.com.com</a>
//         </p>
//         <p>
//           <FiPhoneCall /> <a href="#">Phone: (064) 332-1233</a>
//         </p>
//         <p>
//           <CiLocationOn /> <a href="#">450 Wall Street, USA, New York</a>
//         </p>
//       </div>
//       <div classNameName="information-list">
//         <h3>Information</h3>
//         <a href="#">New Collection</a>
//         <a href="#">About Store</a>
//         <a href="#">Contact Us</a>
//         <a href="#">Latest News</a>
//         <a href="#">Our Sitemap</a>
//         <a href="#">Orders History</a>
//       </div>
//       <div classNameName="information-list">
//         <h3>Fotter Menu</h3>
//         <a href="#">New Collection</a>
//         <a href="#">About Store</a>
//         <a href="#">Contact Us</a>
//         <a href="#">Latest News</a>
//         <a href="#">Our Sitemap</a>
//         <a href="#">Orders History</a>
//       </div>
//       <div classNameName="information-list">
//         <h3>Useful LInks</h3>
//         <a href="#">New Collection</a>
//         <a href="#">About Store</a>
//         <a href="#">Contact Us</a>
//         <a href="#">Latest News</a>
//         <a href="#">Our Sitemap</a>
//         <a href="#">Orders History</a>
//       </div>
//       <div classNameName="about-store">
//         <h3>About the store</h3>
//         <p>Lorem ipsum is placeholder text <br /> commonly used in the graphic, print,<br /> and layouts and visual mockups.</p>
//         <a href="#">www.company.com</a>
//         <p><IoLogoFacebook /> 
//         <AiOutlineInstagram />
//         <FaSquareTwitter />
//         <FaLinkedin />



// </p>
// <p><CiGlobe /> English
// </p>
//       </div>
//     </div>
<>
<footer>
        <div className="footer-list links">
            <img src={logoFooter} alt=""/>
            <p>Lorem ipsum is placeholder text <br/>
                commonly used in the graphic, print<br/>
                layouts and visual mockups.</p>
            <p className="link"> <span className="fa-solid fa-envelope"></span> <a href="mailto: @aydinhuseynov980@gmail.com">
                    aydinhuseynov980@gmail.com</a> <br/></p>
            <p className="link"> <span className="fa-solid fa-phone-volume"></span> <a href="tel: +994553370207">Phone:(055)-337-02-07</a>
                <br/>
            </p>
            <p className="link"> <span className="fa-solid fa-location-dot"></span> <a href="">450 Wall Street, USA, New York</a>
            </p>
        </div>
        <div className="footer-list texts">
            <h1>INFORMATION</h1>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact us</p>
            <p>Latest news</p>
            <p>Our Sitemap</p>
            <p>Our history</p>
        </div>
        <div className="footer-list texts">
            <h1>FOOTER MENU</h1>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact us</p>
            <p>Latest news</p>
            <p>Our Sitemap</p>
            <p>Our history</p>
        </div>
        <div className="footer-list texts">
            <h1>USEFUL LINKS</h1>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact us</p>
            <p>Latest news</p>
            <p>Our Sitemap</p>
            <p>Our history</p>
        </div>

        <div className="footer-list social">
            <h1>ABOUT THE STORE</h1>
            <p>Lorem ipsum is placeholder text <br/>
                commonly used in the graphic, print, and <br/>
                layouts and visual mockups.</p>

            <a href="">www.company.com</a> <br/>

            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
            <br/>
            <i className="fa-solid fa-globe"></i> <label htmlFor="languages">Language</label> 
            <select  id="languages">
                <option value="english">English</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="russian">Russian</option>
            </select>
            

        </div>
    </footer>
</>
  );
};

export default Fotter;
