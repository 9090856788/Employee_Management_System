/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header";
import TaskListNumber from "../TaskListNumber";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Header/>
        <TaskListNumber/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
