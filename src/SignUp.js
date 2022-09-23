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
        <form>
          <h1>Signup pages</h1>
          <label>
            Name<span className="mandetory">*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label>
            Email<span className="mandetory">*</span>{" "}
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label>
            Password<span className="mandetory">*</span>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {/* Signup Page Eng  */}
    </>
  );
};

export default SignUp;
