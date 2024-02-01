// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";
import SettingsPage from "./components/settings";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
