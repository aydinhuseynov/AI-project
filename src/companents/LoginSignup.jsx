import "../assets/css/loginSignup.css";
import userIcon from "../assets/images/person.png";
import emailIcon from "../assets/images/email.png";
import passwordIcon from "../assets/images/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="main-signup-login">
      <div className="containerr">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={userIcon} alt="userpic" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={emailIcon} alt="emaill" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="pasworrd" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
