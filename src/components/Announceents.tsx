import { announcementsData } from "@/lib/data";
import React from "react";

const Announceents = () => {
  return (
    <div className="w-full h-[500px] flex flex-col gap-8 p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold ">Announcements</h2>
        <span className="text-sm text-gray-500">View all</span>
      </div>
      <div className=" flex-1 flex flex-col gap-4 overflow-y-auto">
        {announcementsData.map((item) => (
          <div
            key={item.id}
            className=" odd:bg-cyan-200/30 even:bg-blue-200/30 flex flex-col gap-4 p-5 "
          >
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold text-gray-600">{item.title}</h2>
              <span className="text-sm text-gray-500 bg-white rounded-md py-2 px-4">
                {item.date}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              pariatur, sequi at officia eum necessitatibus?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announceents;
