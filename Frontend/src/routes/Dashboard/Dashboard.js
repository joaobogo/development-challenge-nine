import React, { useContext, useEffect, useState } from "react";
import DashboardContainer from "./Dashboard.styles";
import logo from "../../assets/logo.png";
import profilepic from "../../assets/profile.png";
import { FaHospitalUser, FaToolbox } from "react-icons/fa";
import DashboardContext from "../../context/DashboardContext";
import { getPatients, deletePatient } from "../../functions";
import Modal from "../../component/Modal";

function Dashboard() {
  const { firstname, lastname, email } = useContext(DashboardContext);
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedID, setSelectedId] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  useEffect(() => {
    getPatients().then((data) => setPatients(data));
  }, []);

  const handleEdit = (patient) => {
    setSelectedId(patient.id);
    setIsOpen(true);
    setSelectedPatient(patient);
  };

  const unselect = () => {
    setSelectedId("");
    setSelectedPatient(null);
    window.location.reload()
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

        <div className="patients">
          <h2>Registered Patients</h2>
          <button className="addpatients" onClick={() => setIsOpen(true)}>
            Register New Patient
          </button>

          <div className="scroll-container">
            <table className="patientcard">
              <thead>
                <tr>
                  <th>Patient's Name</th>
                  <th>Birthday</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.birthday}</td>
                    <td>{patient.email}</td>
                    <td>{patient.address}</td>
                    <td>
                      <button
                        className="editpatients"
                        onClick={() => handleEdit(patient)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deletePatient(patient.id)}
                        className="deletepatients"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          unselect={unselect}
          selectedId={selectedID}
          selectedPatient={selectedPatient}
        />
      ) : null}
    </DashboardContainer>
  );
}

export default Dashboard;
