import React from "react";
import login from "../../assests/images/login.svg";
import { Link } from "react-router-dom";

import "./Auth.scss";

function Login() {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={login} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="Email" />
              </div>
              <div className="input-field mb-2">
                <input placeholder="Password" />
              </div>
              <button>LOGIN</button>
              <p>
                Don't have an account? <Link to="/register">REGISTER</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
