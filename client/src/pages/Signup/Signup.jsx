import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/3tech logo for dark mode.png";
import "./Signup.css";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router
import useGTMEventTracker from "../../components/GoogleTagManager/useGTMEventTracker";
import api from '../../api';
import { toast } from 'react-toastify';

const Signup = () => {
  const { t } = useTranslation();
  const trackEvent = useGTMEventTracker();  // Use the custom hook

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await api("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        navigate("/login");
      } else {
        toast.error(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-card">
          {/* Left Section: Create Account */}
          <div className="signup-left">
            <h2>{t("Create Account")}</h2>
            <p>
              {t("Already have an account?")}{" "}
              <Link to="/login" className='login-link'
                onClick={() => trackEvent('click on login link', 'Navigation', 'Click', 'Login link in SignUp page')}
              >
                {t("Login")}
              </Link>
            </p>
            <form className="signup-form" onSubmit={handleSignup}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("First Name")}
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("Last Name")}
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("Full Name")}
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("Email")}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder={t("Password")}
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder={t("Confirm Password")}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("Phone Number")}
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select className="form-control"
                    required
                    value={formData.gender}
                    onChange={handleChange}>
                    <option value="" disabled selected>
                      {t("Select Gender")}
                    </option>
                    <option value="male">{t("Male")}</option>
                    <option value="female">{t("Female")}</option>
                    <option value="other">{t("Other")}</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn signup-btn">
                {t("Sign Up")}
              </button>
            </form>
          </div>

          {/* Right Section: Introduction */}
          <div className="signup-right">
            <div className="logo-container">
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
      </div>
    </div>
  );
};

export default Signup;
