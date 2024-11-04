/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-3 m-3">
          <h1 className="text-2xl font-medium">
            Hello <br />{" "}
            <span className="text-3xl font-semibold">Kanhu 👋</span>
          </h1>
          <button className="bg-red-600 text-white text-lg font-medium px-3 py-2 rounded-md">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
