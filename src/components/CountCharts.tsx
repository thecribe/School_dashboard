"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Total",
    uv: 100,

    fill: "white",
  },
  {
    name: "Girls",
    uv: 60,

    fill: "rgba(250,204,21,0.5)",
  },
  {
    name: "Boys",
    uv: 40,

    fill: "rgba(37,99,235,0.5)",
  },
];

const CountCharts = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold ">Students</h2>
        <Image src="/moreDark.png" alt="" width={24} height={24} />
      </div>
      <div className="w-full h-[75%] relative">
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={40}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "white" }}
              background
              dataKey="uv"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col gap-1 justify-center">
          <div className="w-5 h-5 rounded-full bg-blue-500/50"></div>
          <h3 className="font-bold">2345</h3>
          <p className="text-xs text-gray-500">Boys (45%)</p>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="w-5 h-5 rounded-full bg-yellow-500/50"></div>
          <h3 className="font-bold">2345</h3>
          <p className="text-xs text-gray-500">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountCharts;
