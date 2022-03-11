import React, { useState } from "react";
import { TableContainer, TableName, TableContent } from "../../styles";

function ShopInfo({ dataName, data }) {
  const [edit, setEdit] = useState("");
  const onChangeInput = (e) => {
    setEdit(e.target.value);
    console.log(e.target.value);
  };
  return (
    <TableContainer>
      <TableName>{dataName}</TableName>
      <TableContent>
        <input defaultValue={data} onChange={onChangeInput} />
      </TableContent>
    </TableContainer>
  );
}

export default ShopInfo;
