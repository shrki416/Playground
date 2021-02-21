import React, { useState } from "react";
import registerImg from "../../assests/images/register.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/auth";

import "./Auth.scss";

function Register({ history }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      register({ firstName, lastName, email, password, gender }, history)
    );
    setEmail("");
    setPassword("");
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={registerImg} alt="register" />
          </div>
          <div id="form-section">
            <h2>Create an account</h2>
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  placeholder="First Name"
                  value={firstName}
                  type="text"
                  required="required"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-field mb-1">
                <input
                  placeholder="Last Name"
                  value={lastName}
                  type="text"
                  required="required"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-field mb-1">
                <input
                  placeholder="Email"
                  value={email}
                  type="email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field mb-1">
                <select
                  value={gender}
                  required="required"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="input-field mb-2">
                <input
                  placeholder="Password"
                  value={password}
                  type="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button>REGISTER</button>
              <p>
                Already have an accout? <Link to="/login">LOGIN</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
