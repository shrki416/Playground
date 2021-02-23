import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../../../store/actions/auth";
import Modal from "../../../Modal/Modal";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const user = useSelector((state) => state.authReducer.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const form = { firstName, lastName, email, gender, password, avatar };
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
  };

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
            <Fragment key="header">
              <h3 className="m-0">Update Profile</h3>
            </Fragment>
            <Fragment key="body">
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
                <div className="input-field mb-2">
                  <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key="footer">
              <button className="btn-success">UPDATE</button>
            </Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Navbar;
