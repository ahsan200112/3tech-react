import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/3tech logo for dark mode.png";
import "./Login.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom"; // Import Link from React Router
import useGTMEventTracker from "../../components/GoogleTagManager/useGTMEventTracker";
import api from '../../api/api';
import { login } from "../../api/apiEndpoints";
import { toast } from 'react-toastify';

const Login = () => {
  const { t, i18n } = useTranslation();
  const trackEvent = useGTMEventTracker();  // Use the custom hook
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(login, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error("Login Error:", error.response ? error.response.data : error);
      toast.error(error.response ? error.response.data.message : 'Invalid credentials or server error');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-card">
          {/* Left Section: Create Account */}
          <div className="login-left">
            <h2>{t("Sign In")}</h2>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="login-form-group">
                <label htmlFor="email">{t("Email")}</label>
                <input
                  id="email"
                  type="email"
                  className="login-form-control"
                  placeholder={t("Enter your email")}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className={`form-group input-wrapper ${i18n.dir() === "rtl" ? "rtl" : "ltr"}`}>
                <label htmlFor="password">{t("Password")}</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="login-form-control"
                  placeholder={t("Enter your password")}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="btn login-btn mt-3"
                onClick={() => trackEvent('click on dashboard-login button', 'Navigation', 'Click', 'dashboard-login button')}
              >
                {t("Login")}
              </button>
            </form>
          </div>

          {/* Right Section: Introduction */}
          <div className="login-right">
            <div className="logo-container">
              {/* Replace src with your logo's URL */}
              <img
                src={Logo}
                alt="Company Logo"
                className="company-logo"
              />
            </div>
            <h3>{t("Welcome To Your Website!")}</h3>
            <p className="web-p">
              {t("Manage sales, inventory, and customer insights seamlessly with a POS system designed for modern businesses. Streamline operations, boost efficiency, and deliver exceptional customer experiences. Empower your business with real-time data and smart decision-making tools.")}
            </p>
            <p className="mobile-p">
              {t("Manage sales, inventory, and customer insights seamlessly with a POS  system designed for modern businesses.")}
            </p>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Login;
