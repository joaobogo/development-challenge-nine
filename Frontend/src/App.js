import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import DashboardProvider from "./context/DashboardProvider";
import Dashboard from "./routes/Dashboard/Dashboard";
import AccountManagement from "./routes/AccountManagement/AccountManagement";

function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<AccountManagement/>} />
          </Routes>
        </BrowserRouter>
      </DashboardProvider>
    </div>
  );
}

export default App;
