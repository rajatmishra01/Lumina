import React, { useState } from "react";
import "./PreferencesPage.css";

export default function PreferencesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [autoApply, setAutoApply] = useState(true);
  const [doNotDisturb, setDoNotDisturb] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [appointmentReminder, setAppointmentReminder] = useState(true);

  return (
    <div className="preferences-container">
      <div className="pref-card">
        <h2>Preferences</h2>
        <p>Customize appearance, Language, and notifications.</p>

        {/* Appearance */}
        <h3>Appearance</h3>
        <div className="grid-row">
          <div className="item">
            <label>Dark mode</label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="item">
            <label>Auto Apply</label>
            <input
              type="checkbox"
              checked={autoApply}
              onChange={() => setAutoApply(!autoApply)}
            />
          </div>
        </div>

        {/* Language / Region */}
        <div className="grid-row">
          {/* --- MODIFIED HERE --- */}
          <div className="form-group">
            <label>Language & Region</label>
            <select>
              <option>English (IND)</option>
              <option>English (US)</option>
            </select>
          </div>

          {/* --- MODIFIED HERE --- */}
          <div className="form-group">
            <label>Time zone</label>
            <select>
              <option>(UTC + 5:30)</option>
              <option>(UTC + 0:00)</option>
            </select>
          </div>
        </div>

        {/* Accent */}
        <div className="grid-row">
          {/* --- MODIFIED HERE --- */}
          <div className="form-group full">
            <label>Accent Color</label>
            <select>
              <option>System default</option>
              <option>dark</option>
              <option>Light</option>
            </select>
          </div>
        </div>

        {/* Notifications */}
        <h3>Notifications</h3>
        <div className="grid-row">
          <div className="item full">
            <label>Do Not Disturb</label>
            <input
              type="checkbox"
              checked={doNotDisturb}
              onChange={() => setDoNotDisturb(!doNotDisturb)}
            />
          </div>
        </div>

        <div className="grid-row">
          <div className="item">
            <label>Email Notification</label>
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
          </div>
          <div className="item">
            <label>SMS Notification</label>
            <input
              type="checkbox"
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
            />
          </div>
        </div>

        <div className="grid-row">
          <div className="item full">
            <label>Appointment reminders</label>
            <input
              type="checkbox"
              checked={appointmentReminder}
              onChange={() => setAppointmentReminder(!appointmentReminder)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}