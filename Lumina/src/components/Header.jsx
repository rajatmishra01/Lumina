import React from "react";
import { FaBell } from "react-icons/fa";
import "./Header.css"; // import css file

const Header = () => {
  return (
    <header className="header">
      <div className="right-section">
        {/* Bell Icon */}
        <button className="icon-btn">
          <FaBell className="icon" />
        </button>

        {/* Profile Picture */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-pic"
        />

        {/* Logout Button */}
        <button className="logout-btn">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
