import React from "react";
import "./sidebar.scss";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { FaTradeFederation } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <FaTradeFederation className="icon" />
        <p>Flow:k</p>
      </div>

      <ul>
        <Link to="/">
          <li>
            <MdDashboard />
            <p>Dashboard</p>
          </li>
        </Link>

        <Link to="/users">
          <li>
            <FaUsers />
            <p>Users</p>
          </li>
        </Link>

        <Link to={"/products"}>
          <li>
            <FaShapes />
            <p>Products</p>
          </li>
        </Link>

        <li>
          <FaChartSimple />
          <p>Charts</p>
        </li>

        <li>
          <TfiStatsUp />
          <p>Stats</p>
        </li>

        <li>
          <FaRegCalendarMinus />
          <p>Calendar</p>
        </li>

        <li>
          <FaTable />
          <p>Tables</p>
        </li>

        <li>
          <SiGooglemessages />
          <p>Help</p>
        </li>

        <li>
          <FaCanadianMapleLeaf />
          <p>More</p>
        </li>
      </ul>

      <div id="logout">
        <CiLogout />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
