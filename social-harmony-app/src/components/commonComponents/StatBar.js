import React from "react";
import "../../styles/StatBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/routines";
import NotificationPanel from "./notificationPanel";
import { routes } from "../../common/constants/routes/routeConstants";

const StatBar = ({}) => {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onLogOut = () => {
    alert('Session closed');
    navigate(routes.auth.signUp);
    dispatch(logOut());
  };

  return (
    <div className="Stat-bar">
      <h3>Hello, {username}. Welcome to HarmonyHub!</h3>
      <button className="auth-btn" onClick={onLogOut}>
        Log Out
      </button>
      <NotificationPanel/>
    </div>
  );
};

export default StatBar;
