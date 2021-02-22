import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";

function Chat() {
  const user = useSelector((state) => state.authReducer.user);

  console.log(user);
  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">Data</div>
    </div>
  );
}

export default Chat;
