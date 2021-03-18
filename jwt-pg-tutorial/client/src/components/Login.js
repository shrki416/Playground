import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (error) {
      console.error(error.messgae);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="text-center container d-grid my-5">
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button className="btn btn-primary btn-block">Login</button>
        <Link to="/register">REGISTER</Link>
      </form>
    </>
  );
}

export default Login;
