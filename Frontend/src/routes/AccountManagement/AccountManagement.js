import React, { useContext, useState } from "react";
import DashboardContainer from "../Dashboard/Dashboard.styles";
import logo from "../../assets/logo.png";
import profilepic from "../../assets/profile.png";
import { FaHospitalUser, FaToolbox } from "react-icons/fa";
import DashboardContext from "../../context/DashboardContext";

function AccountManagement() {
  const { firstname, lastname, email, setFirstName, setLastName, setEmail } =
    useContext(DashboardContext);
  const [isOnline, setIsOnline] = useState(true);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  const handleSend = (e) => {
    e.preventDefault();
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    window.location.reload();
  };

  return (
    <DashboardContainer>
      <div className="left">
        <div className="admininfo">
          <img className="logo" src={logo}></img>
          <img
            className={isOnline ? "profilepic" : "profilepic2"}
            src={profilepic}
          ></img>
          <p className="main">
            {firstname} {lastname}
          </p>
          <p className="main">Patient Manager</p>
          <p>{email}</p>
          <select className="dropdown" onChange={() => setIsOnline(!isOnline)}>
            <option className="select">Online</option>
            <option className="select">Offline</option>
          </select>
        </div>

        <div className="menuoptions">
          <a href="/" className="selectors">
            <FaHospitalUser className="icon" /> Dashboard
          </a>
          <a href="/settings" className="selectors">
            <FaToolbox className="icon" /> Account Management
          </a>
        </div>
      </div>

      <div className="right">
        <div className="miniheader">
          <div className="mobileheader">
            <img className="profilepic" src={profilepic}></img>
            <div className="mobileright">
              <p className="main">
                {firstname} {lastname}
              </p>
              <p className="main">Patient Manager</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="mobilebuttons">
            <a href="/" className="selectors">
              <FaHospitalUser className="icon" /> Dashboard
            </a>
            <a href="/settings" className="selectors">
              <FaToolbox className="icon" /> My Account
            </a>
          </div>
          <div className="greetings">
            <p className="greet">
              <strong>
                Hello {firstname} {lastname},{" "}
              </strong>{" "}
              Welcome to the patient management portal.
            </p>
            <p className="date">
              {dd}/{mm}/{yyyy}
            </p>
          </div>
        </div>

        <div className="account">
          <h2>Account Management</h2>
          <div className="form">
            <form onSubmit={handleSend}>
              <label>Edit First Name: </label>
              <input
                placeholder="Type New First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <label>Edit Last Name: </label>
              <input
                placeholder="Type New Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <label>Edit Email: </label>
              <input
                placeholder="Type New Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}

export default AccountManagement;
