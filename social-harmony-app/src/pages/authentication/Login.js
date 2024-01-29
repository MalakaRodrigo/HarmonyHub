import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { cognitoLoginErrorMessageFormatter } from "../../utils/authUtils";
import InputValidationMessage from "../../components/ValidationComponents/InputValidationComponent";
import { logIn } from "../../store/routines";
import packageJson from "../../../package.json";
import "../../styles/pages/authentication/login.scss";
import { isNonProd } from "../../utils/envUtils";
import { routes } from "../../common/constants/routes/routeConstants";

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const isValidSession = useSelector((state) => state.auth.isValidSession);
  const isError = useSelector((state) => state.auth.isLoginError);
  const [errorVisible, setErrorVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isValidSession) {
      navigate(routes.dashboard.index);
    }
  }, [isValidSession, navigate]);

  const handleSubmit = (values) => {
    const { username, password } = values;
    dispatch(logIn({ email: username.trim(), password }));
    setIsFormSubmitted(true);
  };

  const handleNewUser = () => {
    navigate(routes.auth.signUp);
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorVisible(true);
    }
  }, [errorMessage]);

  const onFormChange = (changedValues) => {
    if (changedValues) {
      setErrorVisible(false);
    }
  };

  return (
    <div className={`login-container ${isFormSubmitted ? "form-fade" : ""}`}>
      <div className="widget-holder">
        <div className={"widget-card"}>
          <div className="text-area">
            <h2>HarmonyHub: Bridging Hearts Together</h2>
            <h4>
              Explore the power of unity and understanding with our innovative
              engagement platform. Elevate connections to new levels of harmony
              and empathy!
            </h4>
          </div>
        </div>
      </div>
      <div className="form-holder">
        <div className="logo"></div>
        <div className={`form-card ${isFormSubmitted ? "form-card-fade" : ""}`}>
          <h3>Welcome Back!</h3>
          <h2>Login</h2>
          <Form
            form={form}
            onFinish={handleSubmit}
            onValuesChange={onFormChange}
            layout="vertical"
          >
            {isError && errorVisible && (
              <div className="login-error-bar">
                <i className="icon core-icon core-alert-outlined" />{" "}
                {cognitoLoginErrorMessageFormatter(errorMessage)}
              </div>
            )}
            <Form.Item
              name="username"
              label="Username"
              className="login-field"
              rules={[
                {
                  required: true,
                  message: (
                    <InputValidationMessage message="Please enter your username" />
                  ),
                },
              ]}
            >
              <Input className="login-field" autoFocus />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className="login-field password"
              rules={[
                {
                  required: true,
                  message: (
                    <InputValidationMessage message="Please enter your password" />
                  ),
                },
              ]}
            >
              <Input.Password className="login-field" />
            </Form.Item>
            <button type="primary">Login</button>
          </Form>
          <p className="not-a-member">
            Not a member yet. <span className="underline" onClick={handleNewUser} onKeyDown={handleNewUser}>Sign Up</span>
          </p>
        </div>
        {isNonProd && <p>v{packageJson.version}</p>}
      </div>
    </div>
  );
};

export default Login;
