// SettingsPage.js

import React, { useState } from "react";
import "../styles/settings.scss";

const SettingsPage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [language, setLanguage] = useState("en");
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  const handleSaveSettings = () => {
    // Implement logic to save settings
    console.log("Settings saved!");
  };

  return (
    <div className="settings-container">
      <h1 className="section-title">Settings</h1>

      <div className="setting-item">
        <div className="label">Name:</div>
        <div className="value">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="setting-item">
        <div className="label">Email:</div>
        <div className="value">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="setting-item">
        <div className="label">Language:</div>
        <div className="value">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      <div className="setting-item">
        <div className="label">Enable Notifications:</div>
        <div className="value">
          <input
            type="checkbox"
            checked={notificationEnabled}
            onChange={() => setNotificationEnabled(!notificationEnabled)}
          />
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleSaveSettings}>Save Settings</button>
      </div>
    </div>
  );
};

export default SettingsPage;
