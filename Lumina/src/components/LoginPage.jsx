import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/lumina-logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // go to dashboard
  };

  const handleSignup = () => {
    navigate("/signup"); // go to signup page
  };

  return (
    <div className="container">
      {/* Left side - Login form */}
      <div className="login-section">
        <h2 className="login-title">Login</h2>

        <div className="social-icons">
          <div className="icon-circle">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon-circle">
            <i className="fab fa-google"></i>
          </div>
          <div className="icon-circle">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <p className="text-muted">Or use your email account</p>

         <div className="input-container">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" className="input-box" />
        </div>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" className="input-box" />
        </div>

        <p className="forgot">Forgot your password?</p>

        <button className="btn-login" onClick={handleLogin}>
          Log in
        </button>
      </div>

      {/* Right side - Signup section */}
      <div className="signup-section">
        <img src={logo} alt="Lumina Logo" className="logo-img" />

        <div className="signup-content">
          <h2 className="signup-title">Hey there!</h2>
          <p className="signup-text">
            Enter your personal details and start your journey with us
          </p>
          <button className="btn-signup" onClick={handleSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
