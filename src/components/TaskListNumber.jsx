/* eslint-disable no-unused-vars */
import React from "react";

const TaskListNumber = () => {
  return (
    <>
      <div>
        <div className=" w-screen mt-5 flex justify-between gap-5 p-5">
          <div className="w-[45%] bg-blue-400 rounded-xl px-10 py-10">
            <h1 className="text-white font-semibold text-lg">0</h1>
            <h3 className="text-white font-medium text-2xl">New task</h3>
          </div>
          <div className="w-[45%] bg-yellow-400 rounded-xl px-10 py-10">
            <h1 className="text-white font-semibold text-lg">2</h1>
            <h3 className="text-white font-medium text-2xl">Pending task</h3>
          </div>
          <div className="w-[45%] bg-green-400 rounded-xl px-10 py-10">
            <h1 className="text-white font-semibold text-lg">3</h1>
            <h3 className="text-white font-medium text-2xl">Completed task</h3>
          </div>
          <div className="w-[45%] bg-red-400 rounded-xl px-10 py-10">
            <h1 className="text-white font-semibold text-lg">4</h1>
            <h3 className="text-white font-medium text-2xl">Failed task</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
