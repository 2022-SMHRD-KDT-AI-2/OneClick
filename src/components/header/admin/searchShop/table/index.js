import React from "react";
import styled from "@emotion/styled";
import { FlexRowDiv } from "../../../../../styles";
import { categoryColors } from "../../../../../utils/data";

const TableName = styled.div`
  width: 200px;
  overflow: scroll;
  font-size: 1.3rem;
  margin: 0px 1rem 0px 1rem;
`;
const TableContent = styled.div`
  font-size: 1.3rem;
`;

const TableRow = styled(FlexRowDiv)`
  height: 3rem;

  &:hover {
    background-color: ${categoryColors.button};
    color: white;
  }
`;

function Table({ title, addr, shopId, onClickTableItem }) {
  return (
    <TableRow value={shopId} onClick={onClickTableItem}>
      <TableName value={shopId}>{title}</TableName>
      <TableContent value={shopId}>{addr}</TableContent>
    </TableRow>
  );
}

export default Table;
