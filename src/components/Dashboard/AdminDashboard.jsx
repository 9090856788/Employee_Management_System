/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header";
import CreateTask from "../TaskList/CreateTask";
import AllTask from "../TaskList/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Header/>
        <CreateTask/>
        <AllTask/>
      </div>
    </>
  );
};

export default AdminDashboard;
