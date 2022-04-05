/* eslint-disable */
import React from "react";

const TableFilter = ({ filter, setFilter }) => {
  return (
    <span>
      search:{""}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
export default TableFilter;
