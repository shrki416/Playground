import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../../../store/actions/auth";
import Modal from "../../../Modal/Modal";
import "./Navbar.scss";

function Navbar() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div
        onClick={() => setShowProfileOptions(!showProfileOptions)}
        id="profile-menu"
      >
        <img width="40" height="40" src={user.avatar} alt="avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
        <FontAwesomeIcon icon="caret-down" className="fa-icon" />

        {showProfileOptions && (
          <div id="profile-options">
            <p onClick={() => setShowProfileModal(true)}>Update Profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        )}

        {showProfileModal && (
          <Modal click={() => setShowProfileModal(false)}>
            <Fragment key="header">Modal Header</Fragment>
            <Fragment key="body">Modal Body</Fragment>
            <Fragment key="footer">Modal Footer</Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Navbar;
