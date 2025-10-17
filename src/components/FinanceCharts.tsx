"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    expense: 3000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expense: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    expense: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    expense: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    expense: 2390,
    income: 3800,
    amt: 2500,
  },
];

const FinanceCharts = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold ">Finance</h2>
        <Image src="/moreDark.png" alt="" width={24} height={24} />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickSize={10}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickSize={10}
              tickLine={false}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                paddingBottom: "20px",
                textDecoration: "Uppercase",
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceCharts;
