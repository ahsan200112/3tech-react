import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/3tech logo for light mode.png";
import Heroimage from "../../assets/images/1Project.webp";
import "./Login.css";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router
import useGTMEventTracker from "../../components/GoogleTagManager/useGTMEventTracker";
import api from '../../api';
import { toast } from 'react-toastify';

const Login = () => {
  const { t } = useTranslation();
  const trackEvent = useGTMEventTracker();  // Use the custom hook
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        // Store token or navigate to dashboard
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section: Create Account */}
        <div className="login-left">
          <div className="logo-container">
            {/* Replace src with your logo's URL */}
            <img
              src={Logo}
              alt="Company Logo"
              className="company-logo"
            />
          </div>
          <h2>{t("Login to your account")}</h2>
          <p>
            {t("Create new account?")}{" "}
            <Link to="/signup" className='signup-link'
              onClick={() => trackEvent('click on signup link', 'Navigation', 'Click', 'Sign up link in login page')}
            >
              {t("Sign Up")}
            </Link>
          </p>
          <form className="login-form" onSubmit={handleLogin}>
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                required
              />
            </div>  */}
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder={t("Email")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder={t("Password")}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="btn login-btn">
              {t("Login")}
            </button>
            <Link to="/forgetpassword" className='forgetpassword-link'
            //onClick={() => trackEvent('click on footer arrow', 'Arrow Click', 'Click', 'Contact Page Link in footer')}
            >
              {t("forget password?")}
            </Link>
          </form>
        </div>

        {/* Right Section: Introduction */}
        <div className="login-right">
          <h3>{t("Introducing new features")}</h3>
          <p>
            {t("Manage sales, inventory, and customer insights seamlessly with a POS  system designed for modern businesses.")}
          </p>
          <div className="analytics-preview center">
            <img
              src={Heroimage}
              alt="Analytics"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
