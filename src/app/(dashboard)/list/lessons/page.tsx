import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Lesson = {
  id: number;
  subject: string;
  class: string;

  teacher: string;
};
const column: { header: string; accessor: string; className?: string }[] = [
  {
    header: "Subject Name",
    accessor: "subject",
    className: "",
  },

  {
    header: "Class",
    accessor: "class",
    className: "",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (eachRow: Lesson) => (
  <tr
    key={eachRow.id}
    className="border-b border-gray-200 even:bg-slate-200/30 hover:bg-blue-200/40 transition-all duration-300  "
  >
    <td className=" text-gray-800 text-sm gap-2 p-4 ">{eachRow.subject}</td>
    <td className=" text-gray-800 text-sm">{eachRow.class}</td>
    <td className="hidden md:table-cell text-gray-800 text-sm">
      {eachRow.teacher}
    </td>

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

const LessonListPage = () => {
  return (
    <div className="bg-white flex-1 rounded-md p-4 m-4 flex flex-col gap-5">
      {/* TOP  */}
      <div className="flex justify-between w-full items-center ">
        <h1 className="text-lg font-bold hidden md:block">All Lessons</h1>
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
        <Table columns={column} renderRow={renderRow} data={lessonsData} />
      </div>
      {/* PAGE  */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default LessonListPage;
