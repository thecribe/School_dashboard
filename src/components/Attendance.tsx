"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mondays",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesdays",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wednessday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const Attendance = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold ">Attendance</h2>
        <Image src="/moreDark.png" alt="" width={24} height={24} />
      </div>
      <div className="w-full flex-1">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: `40px`, paddingTop: "20px" }}
            />
            <Bar
              dataKey="pv"
              fill="rgba(37,99,235,0.5)"
              //   activeBar={<Rectangle fill="pink" stroke="blue" />}
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="rgba(250,204,21,0.5)"
              //   activeBar={<Rectangle fill="gold" stroke="purple" />}
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* <div className="flex justify-center items-center gap-10">
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
      </div> */}
    </div>
  );
};

export default Attendance;
