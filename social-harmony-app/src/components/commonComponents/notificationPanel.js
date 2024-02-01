import React, { useState } from "react";
import { faCalendarTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/notificationPanel.scss";

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      message: "John Doe sent you a friend request.",
      type: "info",
      user: "John Doe",
    },
    {
      message: "Your friend Sarah accepted your friend request.",
      type: "success",
      user: "Sarah",
    },
    {
      message: "Tom liked your post.",
      type: "info",
      user: "Tom",
    },
    {
      message: "Alice commented on your photo.",
      type: "info",
      user: "Alice",
    },
  ]);

  const handleNotificationClose = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <div className={`notification-panel ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <faCalendarTimes/>
        {isOpen ? "Hide Notifications" : "Show Notifications"}
      </button>
      {isOpen && (
        <div className="notifications">
          {notifications.map((notification, index) => (
            <div key={index} className={`notification ${notification.type}`}>
              <span>{notification.message}</span>
              <span
                className="close-btn"
                onClick={() => {
                  handleNotificationClose(index);
                }}
              >
                X
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
