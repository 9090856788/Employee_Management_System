/* eslint-disable no-unused-vars */
import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="bg-[#454444]  m-5 rounded-md flex-nowrap flex flex-col justify-between gap-2">
        <div>
          <form className="flex items-center justify-between px-4 py-5">
            <div className="h-[250px] w-[500px]">
              <div className="flex flex-col gap-1 px-3">
                <label>Task Title</label>
                <input
                  type="text"
                  placeholder="Name your Task"
                  className="bg-[#7f7d7d] rounded p-1"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 px-3">
                <label>Date</label>
                <input
                  type="date"
                  placeholder="Name your Task"
                  className="bg-[#7f7d7d] rounded p-1"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 px-3">
                <label>Asign to </label>
                <input
                  type="text"
                  placeholder="Name your Task"
                  className="bg-[#7f7d7d] rounded p-1"
                />
              </div>
              <div className="flex flex-col gap-1 px-3">
                <label>Category</label>
                <input
                  type="text"
                  placeholder="Name your Task"
                  className="bg-[#7f7d7d] rounded p-1"
                />
              </div>
            </div>

            <div className="h-[250px] w-[500px] mr-5">
              <h3>Description</h3>
              <textarea className="h-[175px] w-[500px] rounded bg-[#7f7d7d] p-2 " />
              <br />
              <button className="h-[35px] w-[500px] bg-green-300 rounded mt-2">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
