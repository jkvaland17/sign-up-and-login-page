//The first element is the initial state and the second one is a function that is used for updating the state.
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [Useremail, setUserEmail] = useState("");
  const [Userpass, setUserPass] = useState("");
  const loginData = [];

  const check = () => {
    loginData.push(Useremail, Userpass);
    console.log("login", loginData);
    // stored data from the SignUp-form
    let listData = localStorage.getItem("list");
    //store and convert text into a JavaScript string to object
    // let oldData = JSON.parse(listData);
    // console.log("old", oldData);

    // check if stored data from register-form is equal to data from login form
    // if (
    //   oldData["Email"] === loginData &&
    //   oldData["Password"] === loginData
    // ) {
    //   alert("you are successfully logged in");
    // } else {
    //   alert("Sorry! Wrong Username and Password");
    // }
    if (listData && listData.length) {
      let oldData = JSON.parse(listData);
      const userlogin = oldData.filter((el, k) => {
        return el.Email === Useremail && el.Password === Userpass;
      });
      if (userlogin.length === 0) {
        alert("invelid");
      } else {
        alert("you are successfully logged in");
        localStorage.setItem("user_login", JSON.stringify(userlogin));
      }
    }
  };
  //login Form End
  return (
    <>
      {/* Login Page Start */}
      <div>
        <h1>Login Page</h1>
        <label>
          Email<span className="mandetory">*</span>
        </label>
        <br />
        <input
          type="email"
          placeholder="Enter Email Id"
          value={Useremail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <label>
          Password<span className="mandetory">*</span>
        </label>
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
        <h4>
          Not a member ?<NavLink to="/signup"> Signup now</NavLink>
        </h4>
      </div>

      {/* Login Page End */}
    </>
  );
};

export default Login;
