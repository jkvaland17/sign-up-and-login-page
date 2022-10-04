import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Details = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storageData, setStorageData] = useState([]);
  const [editdata, seteditdata] = useState(false);

  //fatch data from url
  let { id } = useParams();
  useEffect(() => {
    // get data from the SignUp-form
    let listData = localStorage.getItem("list");
    //store and convert text into a JavaScript string to object
    let oldData = JSON.parse(listData);
    setStorageData(oldData);
    //localstorage data and useParams useremail data filtered
    const personDetails = oldData.find((obj) => {
      // eslint-disable-next-line eqeqeq
      return obj.Id == id;
    });
    setName(personDetails.Name);
    setEmail(personDetails.Email);
  }, [id]);
  //button start
  //logout button function
  const logout = () => {
    alert("You have successfully logged out!");
  };
  //button End

  //edititem btn
  const handleChange = () => {
    seteditdata(!editdata);
    // eslint-disable-next-line no-unused-vars
    let newEditItem = storageData.findIndex((elem) => {
      // eslint-disable-next-line eqeqeq
      return elem.Id == id;
    });
    storageData[newEditItem].Name = name;
    storageData[newEditItem].Email = email;
    localStorage.setItem("list", JSON.stringify(storageData));
  };
  return (
    <div className="center">
      <div className="abcd">
        <div>
          <h3>
            {editdata ? (
              <>
                Name:
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </>
            ) : (
              <> Name: {name}</>
            )}
          </h3>
          <h3>
            {editdata ? (
              <>
                Email:
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            ) : (
              <> Email:{email}</>
            )}
          </h3>
        </div>
        <div>
          {" "}
          <button className="btn1" onClick={() => handleChange()}>
            Edit
          </button>
        </div>
      </div>
      <NavLink to="/">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default Details;
