import React, { useState } from "react";
import "./newUser.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
const NewUser = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [address,setAddress ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
  };
    
  return (
    <div className="newUser">
      <Sidebar />
      <div className="navContainer">
        {/* <Navbar /> */}
        <div className="formContainer">
          <h1>ADD USER</h1>
          <form onSubmit={handleSubmit}>
              <input type="file" id="fileAdd" style={{display : "none"}}/>
              Add Image
            <label htmlFor="fileAdd" className="">
              <img src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt="" />
            </label>
            <label>
              <p>Name :</p>
              <input  type="text" placeholder="Enter name" onChange={e=> setName(e.target.value)} />
            </label>

            <label>
              <p>Email :</p>
              <input type="email" placeholder="Enter email"  onChange={e=> setEmail(e.target.value)}/>
            </label>

            <label>
              <p>Password :</p>
              <input type="password" placeholder="Enter password"  onChange={e=> setPassword(e.target.value)}/>
            </label>

            <label>
              <p>Address :</p>
              <input type="text" placeholder="Enter address" onChange={e=> setAddress(e.target.value)} />
            </label>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
