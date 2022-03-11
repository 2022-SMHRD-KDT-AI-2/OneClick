import React from "react";
import styled from "@emotion/styled";

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  margin: 10px 10px 10px 40px;
  width: 15%;
  min-width: 100px;
  overflow: scroll;
`;

const Address = styled.div`
  margin: 10px 10px 10px 60px;
  width: 70%;
  overflow: scroll;
`;

function ResultTable({ title, addr }) {
  return (
    <TableContainer>
      <Title>{title}</Title>
      <Address>{addr}</Address>
    </TableContainer>
  );
}

export default ResultTable;
