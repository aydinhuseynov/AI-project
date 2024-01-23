import Button from "./Button";
import "../assets/css/deeplearning.css";
import DeeplearningLogo from "../assets/images/deepLearning.svg";


const DeepLearning = () => {
  return (
    <>
      <div  className="deep-learning-section pt-5 d-flex justify-content-around ">
        <div  data-aos="fade-down-right" className="deeplearning-left-side">
          <img src={DeeplearningLogo} />
        </div>
        <div className="deeplearning-right-side  m-4" data-aos="zoom-in-up">
          <h1 className="text-white">Apply AI, Deep Learning <br />
             and Data Sciece to solve
         </h1>
      
          <p className="text-white deepText">
            Lorem ipsum is placeholder text commonly used in the <br />
            graphic, print, and publishing industries for previewing <br />
            layouts and visual mockups.
          </p>
          <Button insideText="Learn More" />
        </div>
      </div>
    </>
  );
};

export default DeepLearning;
