import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-blue-950 min-h-screen w-full flex items-center justify-center ">
        <div className="bg-white w-110 h-110 shadow-2xl rounded-2xl p-5">
          <h1 className="text-center text-2xl m-5 font-semibold">Login Form</h1>
          <h4>Name*</h4>
          <input
            className="h-10  w-85 p-5 m-3 border-2 border-blue-500 rounded-2xl"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h4>Email*</h4>
          <input
            className="h-10  w-85 p-5 m-3 border-2 border-blue-500 rounded-2xl"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h4>password*</h4>
          <input
            className="h-10  w-85 p-5 m-3 border-2 border-blue-500 rounded-2xl"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="h-10  w-85 p-1 text-center m-3  border-2 bg-blue-600 text-white border-blue-500 rounded-2xl text-xl font-bold"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
