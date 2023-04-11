import React from "react";
import "./Statistics.css";
import HeaderCoverRest from "../HeaderCoverRest/HeaderCoverRest";
// import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";
import "./Statistics.css"

const data = [
  { name: "Assignment 1 - New Year New Me", value: 50 },
  { name: "Assignment 2 - G3 Architects", value: 59 },
  { name: "Assignment 3 - Legal Solutions", value: 30 },
  { name: "Assignment 4 - Basic Javascript Problem Solving", value: 60 },
  { name: "Assignment 5 - Geometry Genius", value: 60 },
  { name: "Assignment 6 - AI Universe", value: 60 },
  { name: "Assignment 7 - Quiz Hero", value: 60 },
  { name: "Assignment 8 - Knowledge Cafe", value: 60 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "grey",
  "green",
  "brown",
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(100%, -50%)",
  lineHeight: "24px",
};

const Statistics = () => {
  return (
    <div className="stat-page">
      <HeaderCoverRest>Statistics</HeaderCoverRest>
      <div className="chart" style={{backgroundColor: "white", display: "flex", justifyContent: "center",marginLeft: "-300px"}}>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label= "assignment"
            outerRadius={80}
            fill="red"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
    </div>
    </div>
  );
};

export default Statistics;
