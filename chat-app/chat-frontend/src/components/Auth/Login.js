import React from "react";
import login from "../../assests/images/login.svg";
// import register from '../../assests/images/register.svg'

function Login() {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={login} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>
            <form>
              <div className="input-field">
                <input placeholder="Email" />
              </div>
              <div className="input-field">
                <input placeholder="Password" />
              </div>
              <button>LOGIN</button>
              <p>Don't have an account? Register</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
