"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

moment.locale("en-GB"); // or "en-US", just be consistent

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [date, setDate] = useState<Date>(new Date());

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  const onNavigate = (newDate: Date) => {
    console.log(newDate);
    setDate(newDate);
  };

  return (
    <Calendar
      date={date}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onNavigate={onNavigate}
      onView={handleOnChangeView}
      min={new Date(1972, 0, 1, 8, 0, 0, 0)}
      max={new Date(1972, 0, 1, 17, 0, 0, 0)}
    />
  );
};

export default BigCalendar;
