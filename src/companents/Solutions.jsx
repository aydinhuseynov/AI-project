import "../assets/css/ourSolitions.css";
import solitionsLogo from "../assets/images/oursolition.svg";
import {MovingComponent} from 'react-moving-text'
const Solutions = () => {
  return (
    <>
      <div className="solutions" style={{ backgroundColor: "#020A18" }}>
        <div className="solition-left-side ">
        <MovingComponent
  type="slideInFromTop"
  duration="1400ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none"> 
 <h1 className="text-white pt-5">
            What our clients say about <br />
            our awesome solutions
          </h1>
</MovingComponent>

          <div className="solition-comments"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <p>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it who do
            not know.
          </p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing .
          </p>
          <p>
            Lorem ipsum is placeholder previewing layouts and visual mockups.
          </p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          </div>
        </div>
        <div className="solition-right-side" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <img src={solitionsLogo} />
        </div>
      </div>
    </>
  );
};

export default Solutions;
