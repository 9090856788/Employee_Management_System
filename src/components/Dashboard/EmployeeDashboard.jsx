/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header";
import TaskListNumber from "../TaskList/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
