import { Fragment } from "react";
import IntroRightImg from "../assets/images/intro-img.svg";
import "../assets/css/introdaction.css";
import Button from "./Button";
import playIcon from "../assets/images/playicon.svg";
import Typed from "react-typed";
import {MovingComponent} from 'react-moving-text'

function Introdaction() {
  return (
    <Fragment>
      <section className="introdaction row">
        {/*  
        first of all we giv ROW parrent elemnts it is just like flex
        col-12 for the phone devices
        col-md>> for the planshets
        col-lg >>for the notebooks
        col-xl - for the PS
        col -xxl for the TV 
        */}
        <div data-aos="fade-right" className="intro-left-side col-12 col-md-6">
          <MovingComponent
            type="fadeOutToLeft"
            duration="1000ms"
            delay="0 "
            direction="reverse"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <h6 className="text-white">Next genaretion platform</h6>
          </MovingComponent>

          <Typed
            className="typeSpeed"
            strings={["Artificial Intelligence", "Cyber Security"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>

          <p className="text-secondary">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Button insideText="Get started" nameOfClass="get-started-btn" />
          <Button
            insideText="Watch video"
            nameOfClass="watch-video-btn"
            playicon={playIcon}
          />
        </div>

        <div data-aos="fade-left" className="intro-right-side col-12 col-md-6">
          <img src={IntroRightImg} className="intro-img" />
        </div>
      </section>
    </Fragment>
  );
}

export default Introdaction;
