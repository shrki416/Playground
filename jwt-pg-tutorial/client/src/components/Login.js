import React, { useState } from "react";

function Login({ setAuth }) {
  return (
    <>
      <h1>Login</h1>
      <form className="text-center container d-grid my-5">
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="btn btn-primary btn-block">Login</button>
      </form>
    </>
  );
}

export default Login;
