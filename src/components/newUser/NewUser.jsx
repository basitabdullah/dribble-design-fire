import React from "react";
import "./newUser.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
const NewUser = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="newUser">
      <Sidebar />
      <div className="navContainer">
        {/* <Navbar /> */}
        <div className="formContainer">
          <h1>ADD USER</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Name :</p>
              <input type="text" placeholder="Enter name" />
            </label>

            <label>
              <p>Email :</p>
              <input type="text" placeholder="Enter email" />
            </label>

            <label>
              <p>Password :</p>
              <input type="text" placeholder="Enter password" />
            </label>

            <label>
              <p>Address :</p>
              <input type="text" placeholder="Enter a  ddress" />
            </label>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
