import fotterLogo from "../assets/images/fotter.svg";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




import '../assets/css/fotter.css'

const Fotter = () => {
  return (
    <div className="fotter-section">
      <div className="contact-info">
        <img src={fotterLogo} alt="" />
        <p>
          Lorem ipsum is placeholder text <br />
          commonly used in the graphic, print,
          <br /> and layouts and visual mockups.
        </p>
        <p>
          <MdMailOutline /> <a href="#">Company@gmail.com.com</a>
        </p>
        <p>
          <FiPhoneCall /> <a href="#">Phone: (064) 332-1233</a>
        </p>
        <p>
          <CiLocationOn /> <a href="#">450 Wall Street, USA, New York</a>
        </p>
      </div>
      <div className="information-list">
        <h3>Information</h3>
        <a href="#">New Collection</a>
        <a href="#">About Store</a>
        <a href="#">Contact Us</a>
        <a href="#">Latest News</a>
        <a href="#">Our Sitemap</a>
        <a href="#">Orders History</a>
      </div>
      <div className="information-list">
        <h3>Fotter Menu</h3>
        <a href="#">New Collection</a>
        <a href="#">About Store</a>
        <a href="#">Contact Us</a>
        <a href="#">Latest News</a>
        <a href="#">Our Sitemap</a>
        <a href="#">Orders History</a>
      </div>
      <div className="information-list">
        <h3>Useful LInks</h3>
        <a href="#">New Collection</a>
        <a href="#">About Store</a>
        <a href="#">Contact Us</a>
        <a href="#">Latest News</a>
        <a href="#">Our Sitemap</a>
        <a href="#">Orders History</a>
      </div>
      <div className="about-store">
        <h3>About the store</h3>
        <p>Lorem ipsum is placeholder text <br /> commonly used in the graphic, print,<br /> and layouts and visual mockups.</p>
        <a href="#">www.company.com</a>
        <p><IoLogoFacebook /> 
        <AiOutlineInstagram />
        <FaSquareTwitter />
        <FaLinkedin />



</p>
<p><CiGlobe /> English
</p>
      </div>
    </div>
  );
};

export default Fotter;
