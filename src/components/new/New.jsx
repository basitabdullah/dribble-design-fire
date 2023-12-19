import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../dataTableSource";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="navContainer">
        <Navbar />

        <div className="upperContainer">
          <div className="left">
            <div className="edit">
              edit
            </div>
            <h3>Information</h3>
            <div className="container">
              <div className="one">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="two">
                <h1>Fahim</h1>
                <div className="details">
                  <div className="itemDetails">
                    <p className="name">Phone: </p> 
                    <p className="nameDetails">+91-9655254444</p>
                  </div>

                  <div className="itemDetails">
                    <p className="name">Email: </p>
                    <p className="nameDetails">basitabdullash1122@gmail.com</p>
                  </div>

                  <div className="itemDetails">
                    <p className="name">Address: </p>
                    <p className="nameDetails">Kashmir America</p>
                  </div>

                  <div className="itemDetails">
                    <p className="name">Country: </p>
                    <p className="nameDetails"> America</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>User Spending </h3>
            <Chart />
          </div>
        </div>

        <div className="dataTable">
          <Datatable title={"Transactions"} rows={userRows} cols={userColumns} />
        </div>
      </div>
    </div>
  );
};

export default New;
