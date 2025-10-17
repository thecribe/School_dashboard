"use client";
import React from "react";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "rgba(250,204,21,0.5)" },
  { name: "Group B", value: 8, fill: "rgba(37,99,235,0.5)" },
];
const PerformaceChart = () => {
  return (
    <div className="w-full h-[500px] ">
      <div className="h-[100%] relative mt-4">
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={130}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
          <h1 className="text-5xl font-bold ">9.2</h1>
          <p className="text-sm text-gray-300">of 10 max LTS</p>
        </div>
        <h2 className="font-medium text-center w-full absolute bottom-28">
          1st Sesmester - 2nd Semester
        </h2>
      </div>
    </div>
  );
};

export default PerformaceChart;
