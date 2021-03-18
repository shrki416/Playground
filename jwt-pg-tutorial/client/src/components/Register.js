import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ setAuth }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = input;
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();
      localStorage.setItem("token", parseResponse.token);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form className="container d-grid" onSubmit={onSubmit}>
        <input
          className="form-control my-3"
          type="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
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
        <button className="btn btn-success" type="submit">
          Submit
        </button>
        <Link to="/login">LOGIN</Link>
      </form>
    </>
  );
}

export default Register;
