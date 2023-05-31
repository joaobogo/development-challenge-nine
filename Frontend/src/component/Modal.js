import React, { useState } from "react";
import { postPatient, updatePatient, handleFormat } from "../functions";
import ModalContainer from "./styles/Modal.styles";

function Modal({ selectedId, unselect, selectedPatient, setIsOpen }) {
  const [name, setName] = useState(selectedPatient ? selectedPatient.name : "");

  const [birthday, setBirthday] = useState(
    selectedPatient ? handleFormat(selectedPatient.birthday) : ""
  );
  const [email, setEmail] = useState(
    selectedPatient ? selectedPatient.email : ""
  );
  const [address, setAddress] = useState(
    selectedPatient ? selectedPatient.address : ""
  );


  const handleDate = (date) => {
    setBirthday(date)
  };

  const formatDate = (date) =>{
    const [year,month,day] = date.split('-') 
    return month + "/" + day + "/" + year
  }

  const handlePost = (e) => {
    e.preventDefault();
    const patient = {
      id: selectedId || Date.now(),
      name,
      birthday: formatDate(birthday),
      email,
      address,
    };
    if (selectedId) {
      updatePatient(patient);
      unselect();
    } else {
      postPatient(patient);
      window.location.reload();
    }
  };

  return (
    <ModalContainer className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <form onSubmit={handlePost}>
          <label>Full Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
          <label>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Birthday:</label>
          <input
            placeholder="00/00/0000"
            type="date"
            value={birthday}
            onChange={(e) => handleDate(e.target.value)}
          ></input>
          <label>Street Address:</label>
          <input
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <button className="submit" type="submit" disabled={!name || !email || !birthday || !address}>
            Submit
          </button>
        </form>
        <button onClick={() => setIsOpen(false)} className="close-modal">
          X
        </button>
      </div>
    </ModalContainer>
  );
}

export default Modal;
