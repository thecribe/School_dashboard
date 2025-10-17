import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-blue-600/50 flex-1 even:bg-yellow-400/50 p-4 rounded-lg min-w-[200px] flex flex-col justify-center  font-semibold text-lg cursor-pointer gap-4">
      <div className="flex justify-between items-center text-xs">
        <span className="bg-white text-green-800 px-2 py-1 rounded-full">
          2024/25
        </span>
        <span className="text-white font-bold text-xl">...</span>
      </div>
      <p className="text-3xl font-bold">6,123</p>
      <h2 className="text-gray-500 font-bold text-sm">{type}s</h2>
    </div>
  );
};

export default UserCard;
