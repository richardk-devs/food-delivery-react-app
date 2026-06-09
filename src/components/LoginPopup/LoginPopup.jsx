import React, { useState } from "react";
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">

        
        <div className="login-popup-title">
          <h2>{currState}</h2>

          
          <img
            onClick={() => setShowLogin(false)}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="close"
            className="close-icon"
          />
        </div>

        
        {currState === "Sign Up" ? (
          <input type="text" placeholder="Full Name" required />
        ):""}

        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        
        <button type="submit" className="login-btn">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

    
        <p className="login-popup-switch">
          {currState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
