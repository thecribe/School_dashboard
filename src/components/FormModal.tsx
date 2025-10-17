"use client";
import Image from "next/image";
import React, { useState } from "react";
import TeacherForm from "./Forms/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table?:
    | "announcement"
    | "assignment"
    | "classes"
    | "event"
    | "exam"
    | "lesson"
    | "parent"
    | "result"
    | "student"
    | "subject"
    | "teacher";
  type: "plus" | "delete" | "edit" | "view";
  data?: any;
  id?: any;
}) => {
  const [open, setOpen] = useState(false);

  const Form = () => {
    let formOutput;

    switch (table) {
      case "teacher":
        if (type === "plus" || type === "edit") {
          formOutput = <TeacherForm type={type} />;
        } else {
          formOutput = null;
        }
        break;

      default:
        break;
    }
    return type === "delete" && id ? (
      <form
        action=""
        className="flex flex-col justify-center items-center gap-4 p-4"
      >
        <span className="text-center font-medium">
          Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md w-fit">
          Delete
        </button>
      </form>
    ) : (
      formOutput
    );
  };
  return (
    <>
      <button
        className={`${
          type === "plus"
            ? "w-10 h-10 bg-yellow-500/50"
            : type === "delete"
            ? "w-7 h-7 bg-purple-500/50"
            : "w-7 h-7 bg-blue-500/50"
        } flex items-center justify-center rounded-full`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <div className="flex justify-end items-center">
              <Image
                src="/close.png"
                alt="close"
                width={14}
                height={14}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
