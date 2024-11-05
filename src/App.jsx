/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/employee" element={<EmployeeDashboard />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
