import React from "react";
import { NavLink, useParams } from "react-router-dom";
const Details = () => {
  //returns an object of value current URL that were matched by the <Route path>
  let { Useremail } = useParams();
  // get data from the SignUp-form
  let listData = localStorage.getItem("list");
  //store and convert text into a JavaScript string to object
  let oldData = JSON.parse(listData);
  //localstorage data and useParams useremail data filtered
  const personDetails = oldData.filter((el) => {
    return el.Email === Useremail;
  });

  //button start
  //logout button function
  const logout = () => {
    alert("You have successfully logged out!");
  };
  //button End
  return (
    <div className="center">
      {/* Then the data of 0 index also goes in the filtered data and the name is
      show */}
      <h3>Name: {personDetails[0].Name}</h3>
      <h3>Email Id: {Useremail}</h3>
      <NavLink to="/">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default Details;
