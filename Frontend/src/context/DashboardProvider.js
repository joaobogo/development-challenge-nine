import React, { useState } from "react";
import DashboardContext from "./DashboardContext";

const first = localStorage.getItem("firstname") || "João";
const last = localStorage.getItem("lastname") || "Kasprzak";
const emailaddress = localStorage.getItem("email") || "kasprzakjoao@protonmail.com";

function DashboardProvider({ children }) {
  const [firstname, setFirstName] = useState(first);
  const [lastname, setLastName] = useState(last);
  const [email, setEmail] = useState(emailaddress);

  const globalState = {
    firstname,
    setFirstName,
    lastname,
    setLastName,
    email,
    setEmail,
  };

  return (
    <DashboardContext.Provider value={globalState}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
