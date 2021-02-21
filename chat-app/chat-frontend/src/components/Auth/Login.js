import React, { useState } from "react";
import loginImg from "../../assests/images/login.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

import "./Auth.scss";

function Login({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("john.doe@email.com");
  const [password, setPassword] = useState("secrets");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
    setEmail("");
    setPassword("");
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImg} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field mb-2">
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
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
