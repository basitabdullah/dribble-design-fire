import React from "react";
import "./navbar.scss";
import { IoIosLink } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="inputContainer">
          <input type="text" placeholder="What are you looking for ?" />
        </div>
        <div className="activityContainer">
          <div className="btns">Project</div>
          <div className="btns">Your Activity</div>
          <div className="btns">
            <IoIosLink />
          </div>
          <div className="btns">
            <BsCurrencyDollar />
          </div>
          <div className="btns">
            <CiPlay1 />
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="mid">
          <div className="name">Basit Abd</div>
          <div className="email">basit@gmail.com</div>
        </div>
        <div className="moreBtn">
          <IoMdMore />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
