import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableHeader from "../tableComponent/tableHeader";

const DynamicTable = ({ title, columnheaders, data }) => {
  return (
    <TableContainer component={Paper}>
      <TableHeader title={title}/>
      <Table>
        <TableHead>
          <TableRow>
            {columnheaders.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
            {/* Add more header cells as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {Object.keys(item).map((rowItem, rowIndex) => (
                <TableCell key={rowIndex}>{item[rowItem]}</TableCell>
              ))}
              {/* Add more cells for other data properties */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
