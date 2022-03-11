import React, { useState } from "react";
import styled from "@emotion/styled";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DataName = styled.div``;

const Data = styled.input``;

function ShopInfo({ dataName, data }) {
  const [edit, setEdit] = useState("");
  const onChangeInput = (e) => {
    setEdit(e.target.value);
    console.log(e.target.value);
  };
  return (
    <InfoContainer>
      <DataName>{dataName}</DataName>
      <Data defaultValue={data} onChange={onChangeInput} />
    </InfoContainer>
  );
}

export default ShopInfo;
