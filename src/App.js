import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Details from "./Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
};

export default App;
