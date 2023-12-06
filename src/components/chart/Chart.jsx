import React from "react";

import "./chart.scss";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Chart = () => {
    const data = [
        {name : "January" , Total : 1200},
        {name : "February" , Total : 2100},
        {name : "March" , Total : 800},
        {name : "April" , Total : 1600},
        {name : "May" , Total : 900},
        {name : "June" , Total : 1700},
      
      ]
  return (
    <div className="chart">
      <ResponsiveContainer>
        <AreaChart  
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#070C1C"  />
              <stop offset="95%" stopColor="#070C1C" />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#070C1C"  />
              <stop offset="95%" stopColor="#070C1C" stopOpacity={0} />
            </linearGradient>
          </defs>
        
          <Tooltip contentStyle={{borderRadius : "8px"}} />
          <XAxis dataKey="name"/>
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#86B893"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
