import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Lock,
  Trash2,
} from "lucide-react";
import "./settingsPage.css";
// import userImg from "./user.png"; // replace with your image path

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/settings/support') {
      setActiveTab('support');
    } else if (location.pathname === '/settings') {
      setActiveTab('account');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="settings-content">
            <div className="personal-details">
              <h2>Personal Details</h2>
              <p>Manage how your personal information appears on your profile.</p>

              <div className="profile-photo">
                <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-pic"
        />
                <div className="photo-buttons">
                  <button className="upload-btn">📤 Upload New</button>
                  <button className="edit-btn">✏️ Edit</button>
                </div>
              </div>

              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-field">
                    <User size={16} />
                    <input type="text" defaultValue="Rakhi Singh" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-field">
                    <Mail size={16} />
                    <input type="email" defaultValue="example1@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-field">
                    <Phone size={16} />
                    <input type="text" defaultValue="+91-95845-58165" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="input-field">
                    <Calendar size={16} />
                    <input type="text" defaultValue="20/01/2005" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Address</label>
                  <div className="input-field">
                    <MapPin size={16} />
                    <input
                      type="text"
                      defaultValue="Roorkee, Haridwar, Uttarakhand, 247667"
                    />
                  </div>
                </div>

                <div className="button-group">
                  <button type="button" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="status-section">
              <div className="status-card">
                <h3>Status</h3>
                <p>
                  <strong>Member Since:</strong> 12 Jan 2021
                </p>
                <p>
                  <strong>Last Updated:</strong> 02 Aug 2025
                </p>
                <p>
                  <strong>Current Plan:</strong> Pro
                </p>
                <p>
                  <strong>Next Renewal:</strong> 28 Dec 2025
                </p>
                <span className="verified">Verified</span>
              </div>

              <div className="quick-action">
                <h3>Quick Action</h3>
                <button className="reset-btn">
                  <Lock size={16} /> Reset Password
                </button>
                <button className="manage-btn">
                  <Shield size={16} /> Manage 2FA
                </button>
                <button className="delete-btn">
                  <Trash2 size={16} /> Delete Account
                </button>
              </div>
            </div>
          </div>
        );

   
       
  case "payments":
  navigate("/settings/payments");
  return null;

  
      case "support":
        navigate("/settings/support");
        return null;
    }
  };

  return (
    <div className="settings-page">
      

      <main className="main-content">
        <div className="settings-header">
          <h1 className="settings-title">Settings</h1>
        </div>

        <div className="main-content-card">
          {renderContent()}
        </div>

        
      </main>
    </div>
  );
}
