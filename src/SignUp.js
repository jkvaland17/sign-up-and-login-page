import React, { useState } from "react";

const SignUp = () => {
  //SignUp Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [submitted, setSubmitted] = useState([]);

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

  //login Form
  const [Useremail, setUserEmail] = useState("");
  const [Userpass, setUserPass] = useState("");
  const [loginData, setloginData] = useState([]);

  const check = () => {
    loginData.push(Useremail, Userpass);
    // stored data from the SignUp-form
    let listData = localStorage.getItem("list");
    let oldData = JSON.parse(listData);
    console.log(loginData);
    console.log(oldData);

    // check if stored data from register-form is equal to data from login form
    if (oldData[1] === loginData[0] && oldData[2] === loginData[1]) {
      alert("You are loged in.");
    } else {
      alert("Wrong Username and Password");
    }
  };
  //login Form End

  return (
    <>
      {/* Signup Page Start */}
      <div>
        <h1>Signup pages</h1>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <br />
        <label>Email : </label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <br />
        <label>Password : </label>
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
      {/* ------------------------------------------------------------------------------------- */}
      {/* Login Page Start */}
      <div>
        <input
          type="email"
          placeholder="Enter Email Id"
          required
          value={Useremail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          required
          placeholder="Enter Password"
          value={Userpass}
          onChange={(e) => setUserPass(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" onClick={check} />
      </div>
      {/* Login Page End */}
    </>
  );
};

export default SignUp;
