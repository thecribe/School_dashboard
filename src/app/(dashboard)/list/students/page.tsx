import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: number;
  class: string[];
  address: string;
};
const column: { header: string; accessor: string; className?: string }[] = [
  { header: "Students", accessor: "info", className: "" },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (eachRow: Student) => (
  <tr
    key={eachRow.id}
    className="border-b border-gray-200 even:bg-slate-200/30 hover:bg-blue-200/40 transition-all duration-300 "
  >
    <td className="flex items-center gap-2 p-4">
      <Image
        src={eachRow.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="text-sm font-bold text-gray-800">{eachRow.name}</h3>
        <p className="text-sm text-gray-500">{eachRow.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell text-gray-800 text-sm ">
      {eachRow.studentId}
    </td>
    <td className="hidden md:table-cell text-gray-800 text-sm">
      {eachRow.grade}
    </td>
    <td className="hidden md:table-cell text-gray-800 text-sm">
      {eachRow.class}
    </td>
    <td className="hidden lg:table-cell text-gray-800 text-sm">
      {eachRow.phone}
    </td>
    <td className="hidden lg:table-cell text-gray-800 text-sm">
      {eachRow.address}
    </td>
    <td className="">
      <div className="flex items-center gap-2">
        <Link href={`/list/students/${eachRow.id}`}>
          <button className="bg-blue-500/50 w-7 h-7 flex justify-center items-center rounded-full">
            <Image src="/view.png" alt="" width={14} height={14} />
          </button>
        </Link>
        {role === "admin" && <FormModal type="delete" />}
      </div>
    </td>
  </tr>
);

const StudentListPage = () => {
  return (
    <div className="bg-white flex-1 rounded-md p-4 m-4 flex flex-col gap-5">
      {/* TOP  */}
      <div className="flex justify-between w-full items-center ">
        <h1 className="text-lg font-bold hidden md:block">All Students</h1>
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
        <Table columns={column} renderRow={renderRow} data={studentsData} />
      </div>
      {/* PAGE  */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StudentListPage;
