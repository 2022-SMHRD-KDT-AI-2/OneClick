import React from "react";
import { TableName, TableContent, TableContainer } from "../../styles";

function ResultTable({ title, addr }) {
  return (
    <TableContainer>
      <TableName>{title}</TableName>
      <TableContent>{addr}</TableContent>
    </TableContainer>
  );
}

export default ResultTable;
