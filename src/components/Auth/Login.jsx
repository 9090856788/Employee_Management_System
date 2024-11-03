/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log(
      `Form was Submitted with email: ${email} & password: ${password}`
    );
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <form
          // onSubmit={formHandler}
          className="border-4 p-10 rounded-lg bg-gray-100  shadow-lg flex flex-col gap-10 items-center
              shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
            className="p-4 w-64 rounded-lg text-black bg-gray-200 outline-none shadow-inner
                shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter password"
            className="p-4 w-64 rounded-md text-black bg-gray-200 outline-none shadow-inner
                shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]"
          />
          <button
            onClick={formHandler}
            className="p-4 w-32 mt-4 bg-gray-200 rounded-md text-black font-bold
                shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:bg-gray-200"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
