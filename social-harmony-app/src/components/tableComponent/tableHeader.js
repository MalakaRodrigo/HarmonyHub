import React from "react";

const TableHeader = ({ title }) => {
  return (
    <div className="title"><h3>{title.value}</h3></div>
  );
};

export default TableHeader;
