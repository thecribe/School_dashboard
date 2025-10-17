import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="flex gap-2 text-xs ring-[1.5px] ring-gray-500 px-4 py-1 rounded-full items-center">
      <Image src="/search.png" alt="search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search from table"
        className="bg-transparent outline-none w-[300px] p-2"
      />
    </div>
  );
};

export default TableSearch;
