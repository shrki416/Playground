import React, { useState } from "react";
import login from "../../assests/images/login.svg";
import { Link } from "react-router-dom";
// import axios from "axios";
import AuthService from "../../services/authService";

import "./Auth.scss";

function Login() {
  const [email, setEmail] = useState("john.doe@email.com");
  const [password, setPassword] = useState("secrets");

  const submitForm = (e) => {
    e.preventDefault();

    AuthService.login({ email, password }).then((res) => console.log(res));
    // axios
    //   .post("http://localhost:3000/login", { email, password })
    //   .then((res) => console.log("res", res))
    //   .catch((err) => console.log("err", err));

    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={login} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field mb-2">
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
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
