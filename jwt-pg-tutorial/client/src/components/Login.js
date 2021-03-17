import React, { useState } from "react";

function Login({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Login</h1>
      <form className="text-center container d-grid my-5">
        <input
          className="form-control my-3"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          placeholder="email"
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
      </form>
    </>
  );
}

export default Login;
