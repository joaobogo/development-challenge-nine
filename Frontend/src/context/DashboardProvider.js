import React, { useState } from "react";
import DashboardContext from "./DashboardContext";

function DashboardProvider({ children }) {
  const [firstname, setFirstName] = useState("João");
  const [lastname, setLastName] = useState("Kasprzak");
  const [email, setEmail] = useState("kasprzakjoao@protonmail.com");

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
