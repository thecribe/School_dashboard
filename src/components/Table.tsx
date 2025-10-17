import React from "react";

const Table = ({
  columns,
  data,
  renderRow,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  data: {}[];
  renderRow: (item: any) => React.ReactNode;
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="">
          {columns.map((eachCol) => (
            <th
              key={eachCol.accessor}
              className={`${eachCol.className} text-left text-sm text-gray-500 font-bold py-4`}
            >
              {eachCol.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
