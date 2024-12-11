import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="contact-container">
      <div className="form-wrapper">
        <h1>{isLogin ? "Login Form" : "Signup Form"}</h1>
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`toggle-button ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="input-field"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="input-field"
          />
          {isLogin && <a href="/" className="forgot-password">Forgot password?</a>}
          <button type="submit" className="submit-button">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        {isLogin ? (
          <p>
            Create an account? <a href="/">Signup now</a>
          </p>
        ) : (
          <p>
            Already have an account? <a href="/">Login now</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;