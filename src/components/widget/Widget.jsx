import React from "react";
import"./widget.scss"
import { CiFilter } from "react-icons/ci";
import Chart from "../chart/Chart";
const Widget = (prop) => {
  return (
    <div className="widget"  style={{backgroundImage : `url(${prop.bgImg})`}}>
      <div className="left">
        <h1 style={{color : `${prop.color}`}}>{prop.name}</h1>
        <div className="filter">
          <p>Filters</p>
          <div className="icon">
          <CiFilter />
          </div>
        </div>
      </div>

      <div className="right">
        <Chart/>
      </div>
    </div>
  );
};

export default Widget;
