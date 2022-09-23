import React, { useState } from "react";

const SignUp = () => {
  //SignUp Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //All Data value push submitted
  const submitted = [];

  const handleSubmit = (e) => {
    //entered value push submitted
    submitted.push(name, email, pass);
    e.preventDefault();
    //submitted value store localStorage
    localStorage.setItem("list", JSON.stringify(submitted));
    //After submit button click value erase
    setName("");
    setEmail("");
    setPass("");
  };
  //SignUp Form End

  return (
    <>
      {/* Signup Page Start */}
      <div>
        <h1>Signup pages</h1>
        <label>Name : </label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {/* Signup Page Eng */}
    </>
  );
};

export default SignUp;
