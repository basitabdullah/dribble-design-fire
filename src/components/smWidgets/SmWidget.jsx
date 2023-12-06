import React from "react";
import "./smWidget.scss";
import { FaUsers } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgDollar } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
const SmWidget = ({ type }) => {
  let data;
  let amount = 100;
  let diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <FaUsers className="icon" />,
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        icon: <CiDeliveryTruck className="icon" />,
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View Net Earning",
        icon: <CgDollar className="icon" />,
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Balance",
        icon: <FaWallet className="icon" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="smWidget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="perc">
          <IoMdArrowDropup className="arrow up" />
          <p>{diff}%</p>
        </div>
        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default SmWidget;
