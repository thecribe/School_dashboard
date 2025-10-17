"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Team Meeting",
    time: "2025-10-12T09:00:00",
    description:
      "Weekly sync with the development team to review progress and discuss next tasks.",
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "2025-10-12T14:30:00",
    description:
      "Present project updates and new design concepts to the client.",
  },
  {
    id: 3,
    title: "Code Review Session",
    time: "2025-10-13T11:00:00",
    description:
      "Review pull requests and ensure code quality standards are maintained.",
  },
  {
    id: 4,
    title: "Marketing Strategy Call",
    time: "2025-10-14T16:00:00",
    description:
      "Discuss upcoming campaign strategies and ad performance metrics.",
  },
  {
    id: 5,
    title: "Team Lunch",
    time: "2025-10-15T12:30:00",
    description: "Casual lunch to celebrate successful project completion.",
  },
];

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full flex flex-col gap-8">
      <Calendar onChange={onChange} value={value} locale="en-GB" />
      <div className="flex flex-col gap-4 h-[500px]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Events</h2>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
          {events.map((event, index) => (
            <div
              key={event.id}
              className=" border-2 border-t-4 border-gray-100 odd:border-t-blue-500/50 even:border-t-yellow-500/50 flex flex-col gap-4 p-5 "
            >
              <div className="flex justify-between items-center ">
                <h2 className="font-semibold text-gray-600">{event.title}</h2>
                <span className="text-sm text-gray-500">{event.time}</span>
              </div>
              <p className="text-sm text-gray-500">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
