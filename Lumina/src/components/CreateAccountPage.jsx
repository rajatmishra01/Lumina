import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { User } from "lucide-react"; // using only one consistent icon source
import "./CreateAccountPage.css";
import LOGO from  "../assets/lumina-logo.png";

export default function CreateAccountPage() {
  return (
    <div className="container">
      {/* ---------- Left Panel ---------- */}
      <div className="left-panel">
        <div className="logo">
          <img src={LOGO} alt="Logo" className="logo-img" />
        </div>
        <h1>Welcome back!</h1>
        <p>
          To keep connected with us please login with your personal information
        </p>
        <button className="login-btn">Log in</button>
      </div>

      {/* ---------- Right Panel ---------- */}
      <div className="right-panel">
        <h2>Create Account</h2>

        {/* Social Icons */}
        <div className="social-icons">
          <div className="icon-circle"><FaFacebookF /></div>
          <div className="icon-circle"><FaGooglePlusG /></div>
          <div className="icon-circle"><FaLinkedinIn /></div>
        </div>

         <p className="text-muted">Or use your email account</p>

        {/* ---------- Form ---------- */}
        <form>
          {/* Name */}
          <div className="input-wrapper">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>

          {/* Email */}
          <div className="input-wrapper">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>

          {/* Password */}
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
