import UserCard from "@/components/UserCard";
import CountCharts from "@/components/CountCharts";
import { User } from "lucide-react";
import React from "react";
import Attendance from "@/components/Attendance";
import FinanceCharts from "@/components/FinanceCharts";
import CalendarComponent from "@/components/Calendar";
import Announceents from "@/components/Announceents";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row p-4 ">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD  */}
        <div className="w-full flex flex-wrap gap-4">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
        {/* MIDDLE CHARTS  */}
        <div className="flex gap-4 flex-col lg:flex-row w-full">
          <div className="bg-white w-full h-[450px] rounded-lg lg:w-1/3">
            <CountCharts />
          </div>
          <div className="bg-white w-full lg:w-2/3 rounded-lg h-[450px]">
            <Attendance />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="bg-white rounded-lg w-full h-[500px]">
          <FinanceCharts />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div className="w-full bg-white rounded-lg p-4">
          <CalendarComponent />
        </div>
        <div className="w-full bg-white rounded-lg p-4">
          <Announceents />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
