import React, { useState } from "react";
import "./login.css";
import fb from "../images/fb.png";
import tw from "../images/tw.png";
import gp from "../images/gp.png";
const Login = () => {
  const [post, setpost] = useState({ login: "90", register: "450" ,btn:"0" });
  const switchForms = (type) => {
    if (type === "login") {
      setpost({ ...post, login: "90", register: "450" , btn:"0" });
    } else{
      setpost({ ...post, login: "450", register: "90" , btn:"110"});
    }

    
  };
  return (
    <div class="container">
      <div class="loginform">
        <div class="buttonbox">
          <div class="btn" id="btn" style={{ left: `${post.btn}px` }}></div>
          <button
            type="button"
            class="toogle-btns"
            onClick={() => switchForms("login")}
          >
            LogIn
          </button>
          <button
            type="button"
            class="toogle-btns"
            onClick={() => switchForms("register")}
          >
            Register
          </button>
        </div>
        <div class="social-icons">
          <img src={fb} />
          <img src={tw} />
          <img src={gp} />
        </div>
        <form class="login input-group" style={{ left: `${post.login}px` }}>
          <input
            type="text"
            class="input-field"
            placeholder="User Id"
            required
          />
          <input
            type="text"
            class="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" class="check-box" />
          <span>Remember Password</span>
          <button type="submit" class="submit-btn">
            Log In
          </button>
        </form>
        <form class="input-group" style={{ left: `${post.register}px` }}>
          <input
            type="text"
            class="input-field"
            placeholder="User Id"
            required
          />
          <input
            type="email"
            class="input-field"
            placeholder="Enter Email"
            required
          />
          <input
            type="text"
            class="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" class="check-box" />
          <span>I agree to terms & conditions</span>
          <button type="submit" class="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
