import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Details = () => {
  //fatch data from url
  let { id } = useParams();
  // get data from the SignUp-form
  let listData = localStorage.getItem("list");
  //store and convert text into a JavaScript string to object
  let oldData = JSON.parse(listData);
  //localstorage data and useParams useremail data filtered
  const personDetails = oldData.find((obj) => {
    // eslint-disable-next-line eqeqeq
    return obj.Id == id;
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
      <h3>Name:{personDetails.Name} </h3>
      <h3>Email Id:{personDetails.Email}</h3>
      <NavLink to="/">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default Details;
