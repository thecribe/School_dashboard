import Announceents from "@/components/Announceents";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import PerformaceChart from "@/components/PerformaceChart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 w-full flex flex-col xl:flex-row gap-5 p-5">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3 flex flex-col gap-5">
        {/* USER TOP SECTION  */}
        <div className="grid grid-cols-4 grid-rows-2 gap-5">
          {/* USER CARD  */}
          <div className="col-span-4 row-span-1 lg:col-span-2 lg:row-span-2 bg-blue-500/50 py-6 px-4 rounded-md flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="w-full md:w-1/3 flex justify-center items-center ">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt=""
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className=" object-cover rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold text-center md:text-left">
                  Lorem ipsum dolor
                </h1>
                <FormModal table="student" type="edit" />
              </div>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                voluptates. Libero amet voluptate incidunt maiores nostrum esse,
                tempora labore! Porro!
              </p>
              <div className="w-full flex items-center justify-between gap-2 flex-wrap text-sm font-medium ">
                <div className="w-full md:w-1/3 lg:w-full  flex gap-2 items-center ">
                  <Image src="/blood.png" alt="" width={20} height={20} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  flex gap-2 items-center">
                  <Image src="/date.png" alt="" width={20} height={20} />
                  <span>January, 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  flex gap-2 items-center">
                  <Image src="/mail.png" alt="" width={20} height={20} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  flex gap-2 items-center">
                  <Image src="/phone.png" alt="" width={20} height={20} />
                  <span>08456735432</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD  */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 col-span-4 lg:col-span-2 lg:row-span-2">
            <div className="w-full bg-white rounded-md flex gap-5 p-4 items-center ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={14}
                height={14}
                className="w-6 h-7  "
              />
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold text-black text-xl">90%</span>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="w-full bg-white rounded-md flex gap-5 p-4 items-center ">
              <Image
                src="/singleBranch.png"
                alt=""
                width={14}
                height={14}
                className="w-6 h-7  "
              />
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold text-black text-xl">2nd</span>
                <span className="text-sm text-gray-500">Grade</span>
              </div>
            </div>
            <div className="w-full bg-white rounded-md flex gap-5 p-4 items-center ">
              <Image
                src="/singleLesson.png"
                alt=""
                width={14}
                height={14}
                className="w-6 h-7  "
              />
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold text-black text-xl">18</span>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="w-full bg-white rounded-md flex gap-5 p-4 items-center ">
              <Image
                src="/singleClass.png"
                alt=""
                width={14}
                height={14}
                className="w-6 h-7  "
              />
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold text-black text-xl">6A</span>
                <span className="text-sm text-gray-500">Class Name</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student CALENDAR  */}
        <div className="bg-white rounded-md p-4 flex-1 flex flex-col gap-5">
          <h2 className="text-lg font-bold ">Student&apos;s Schedule</h2>

          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-5">
        <div className="bg-white rounded-md p-4">
          <h2 className="text-lg font-bold ">Shortcuts</h2>
          <div className="flex mt-4 flex-wrap  gap-4 text-sm text-gray-500">
            <Link
              href="/"
              className="odd:bg-blue-500/30 even:bg-yellow-500/30 p-3 rounded-md font-medium"
            >
              Student&apos;s Teachers
            </Link>
            <Link
              href="/"
              className="odd:bg-blue-500/30 even:bg-yellow-500/30 p-3 rounded-md font-medium"
            >
              Student&apos;s Results
            </Link>
            <Link
              href="/"
              className="odd:bg-blue-500/30 even:bg-yellow-500/30 p-3 rounded-md font-medium"
            >
              Student&apos;s Lessons
            </Link>
            <Link
              href="/"
              className="odd:bg-blue-500/30 even:bg-yellow-500/30 p-3 rounded-md font-medium"
            >
              Student&apos;s Exams
            </Link>
            <Link
              href="/"
              className="odd:bg-blue-500/30 even:bg-yellow-500/30 p-3 rounded-md font-medium"
            >
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold ">Performance</h2>
            <Image src="/moreDark.png" alt="" width={24} height={24} />
          </div>

          <PerformaceChart />
        </div>
        <div className="bg-white rounded-md p-4">
          <Announceents />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
