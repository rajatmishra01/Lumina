import React from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsNavigation.css";

const SettingsNavigation = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className="settings-navigation">
      <div className="navigation-tabs">
        <button
          className={activeTab === "account" ? "active" : ""}
          onClick={() => setActiveTab("account")}
        >
          Account Settings
        </button>
        <button onClick={() => navigate("/settings/preferences")}>
          Preferences
        </button>
        <button
          className={activeTab === "payments" ? "active" : ""}
          onClick={() => setActiveTab("payments")}
        >
          Payments & Activity
        </button>
        <button
          className={activeTab === "support" ? "active" : ""}
          onClick={() => setActiveTab("support")}
        >
          Support & Data
        </button>
      </div>
    </div>
  );
};

export default SettingsNavigation;