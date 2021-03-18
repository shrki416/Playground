import React, { useState, useEffect } from "react";

function Dashboard({ setAuth }) {
  const [name, setName] = useState();

  async function getProfile() {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setName(parseResponse.user_name);
    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <div>Welcome {name}</div>
      <button onClick={(e) => logout(e)} className="btn btn-success">
        LOGOUT
      </button>
    </div>
  );
}

export default Dashboard;
