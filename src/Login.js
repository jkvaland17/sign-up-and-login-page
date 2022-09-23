
import React, { useState } from "react";

const Login = () => {
  const [Useremail, setUserEmail] = useState("");
  const [Userpass, setUserPass] = useState("");
  const loginData = [];

  const check = () => {
    loginData.push(Useremail, Userpass);
    // stored data from the SignUp-form
    let listData = localStorage.getItem("list");
    let oldData = JSON.parse(listData);
    // console.log(loginData);
    // console.log(oldData);

    // check if stored data from register-form is equal to data from login form
    if (oldData[1] === loginData[0] && oldData[2] === loginData[1]) {
      alert("you are successfully logged in");
    } else {
      alert("Sorry! Wrong Username and Password");
    }
  };
  //login Form End
  return (
    <>
      {/* Login Page Start */}
      <div>
        <h1>Login Page</h1>
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

export default Login
