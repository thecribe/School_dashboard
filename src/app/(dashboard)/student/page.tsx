import Announceents from "@/components/Announceents";
import BigCalendar from "@/components/BigCalendar";
import CalendarComponent from "@/components/Calendar";

import React from "react";

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row p-4 ">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="w-full bg-white rounded-lg p-4 h-full flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold ">Schedule (4A)</h2>
          </div>
          <BigCalendar />
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

export default StudentPage;
