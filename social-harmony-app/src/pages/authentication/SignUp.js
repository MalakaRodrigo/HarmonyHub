// src/components/SignUp.js
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "../../styles/pages/authentication/signup.scss";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/routines";

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="signup-container">
      <div className="form-card">
        <h2>Sign Up</h2>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            dispatch(signUp(credentialResponse));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default SignUp;
