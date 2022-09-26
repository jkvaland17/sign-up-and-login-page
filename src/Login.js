//The first element is the initial state and the second one is a function that is used for updating the state.
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [Useremail, setUserEmail] = useState("");
  const [Userpass, setUserPass] = useState("");
  // All Data value push submitted
  const loginData = [];

  const check = () => {
    loginData.push(Useremail, Userpass);
    // get data from the SignUp-form
    let listData = localStorage.getItem("list");
    if (listData && listData.length) {
      //store and convert text into a JavaScript string to object
      let oldData = JSON.parse(listData);
      const userlogin = oldData.filter((el, k) => {
        return el.Email === Useremail && el.Password === Userpass;
      });

      if (userlogin.length === 0) {
        alert("Sorry!, please enter the correct email and password");
      } else {
        alert("you are successfully logged in");
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
