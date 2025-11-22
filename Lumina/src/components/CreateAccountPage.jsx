import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import "./CreateAccountPage.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function CreateAccountPage() {

  const navigate = useNavigate();

  return (
    <div className="container">

      {/* Left Panel */}
      <div className="left-panel">
        <div className="logo">
          <img src= {logo} alt="Lumina Logo" className="logo-img" />
        </div>

        <h1>Welcome back!</h1>
        <p>To keep connected with us please login with your personal information</p>

        {/* 🔥 Redirect to Login Page */}
        <button className="login-btn" onClick={() => navigate("/")}>
          Log in
        </button>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h2>Create Account</h2>

        <div className="social-icons">
          <div className="icon-circle"><FaFacebookF /></div>
          <div className="icon-circle"><FaGooglePlusG /></div>
          <div className="icon-circle"><FaLinkedinIn /></div>
        </div>

        <p className="text-muted">Or use your email account</p>

        <form>
          <div className="input-wrapper">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-wrapper">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-wrapper">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
