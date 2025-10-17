import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Event = {
  id: number;
  title: string;
  class: string;
  startTime: string;
  endTime: string;
  date: string;
};
const column: { header: string; accessor: string; className?: string }[] = [
  { header: "Event Title", accessor: "title", className: "" },
  {
    header: "Class",
    accessor: "class",
    className: "",
  },
  {
    header: "Start Time",
    accessor: "starttime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endtime",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (eachRow: Event) => (
  <tr
    key={eachRow.id}
    className="border-b border-gray-200 even:bg-slate-200/30 hover:bg-blue-200/40 transition-all duration-300 "
  >
    <td className="flex items-center gap-2 p-4">
      <h3 className="text-sm  text-gray-800">{eachRow.title}</h3>
    </td>
    <td className=" text-gray-800 text-sm ">{eachRow.class}</td>
    <td className="hidden md:table-cell text-gray-800 text-sm">
      {`${eachRow.startTime}`}
    </td>
    <td className="hidden md:table-cell text-gray-800 text-sm">
      {`${eachRow.endTime}`}
    </td>
    <td className=" text-gray-800 text-sm">{eachRow.date}</td>

    <td className="">
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${eachRow.id}`}>
          <FormModal type="edit" />
        </Link>
        {role === "admin" && <FormModal type="delete" />}
      </div>
    </td>
  </tr>
);

const EventListPage = () => {
  return (
    <div className="bg-white flex-1 rounded-md p-4 m-4 flex flex-col gap-5">
      {/* TOP  */}
      <div className="flex justify-between w-full items-center ">
        <h1 className="text-lg font-bold hidden md:block">All Events</h1>
        <div className="w-full md:w-fit flex flex-col md:items-center gap-5 md:flex-row">
          <TableSearch />
          <div className="flex justify-end gap-5 items-center">
            <button className="bg-yellow-500/50 w-10 h-10 flex justify-center items-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-yellow-500/50 w-10 h-10 flex justify-center items-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal type="plus" />
          </div>
        </div>
      </div>
      {/* TABLE  */}
      <div>
        <Table columns={column} renderRow={renderRow} data={eventsData} />
      </div>
      {/* PAGE  */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default EventListPage;
