import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  //SignUp Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [submitted, setSubmitted] = useState([]);
  //All Data value push submitted
  // let submitted = [];

  const handleSubmit = (e) => {
    //entered value push submitted
    submitted.push({ Name: name ,  Email: email ,  Password: pass });
    e.preventDefault();
    //submitted value store localStorage
    localStorage.setItem("list", JSON.stringify(submitted));
    //After submit button click value erase
    setName("");
    setEmail("");
    setPass("");
    setSubmitted([...submitted]);
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
            Email<span className="mandetory">*</span>
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
          <h4>
            Back To <NavLink to="/">Login</NavLink>
          </h4>
        </form>
      </div>
      {/* Signup Page Eng  */}
    </>
  );
};

export default SignUp;
