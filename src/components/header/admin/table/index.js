import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "../../../../pages/login/styles";
import { FlexRowDiv } from "../../../../styles";
import axios from "axios";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const AdminButton = styled(Button)`
  width: 10rem;
`;

const TableHeader = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;

  > .name {
    margin-left: 0.5rem;
  }

  > .addr {
    margin-left: 10rem;
  }
`;

const TableRow = styled.span`
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: red;
  }

  > .name {
    margin-left: 0.5rem;
  }

  > .addr {
    margin-left: 10rem;
  }
`;

function Table({
  data,
  setOpenModal,
  page,
  setPage,
  setSearchData,
  keyword,
  lat,
  long,
}) {
  const [target, setTarget] = useState("");
  const onClickShop = (e) => {
    setTarget(e.target.getAttribute("value"));
  };
  const onClickSetPage = (e) => {
    const value = e.target.getAttribute("value");
    if (page + value > 1) {
      setPage(page + value);
      axios
        .post("http://localhost:7501/shops/keyword", {
          keyword: keyword,
          page: page,
          lat: lat,
          long: long,
        })
        .then((res) => {
          setSearchData(res.data.data);
        });
    }
  };
  return (
    <div>
      <TableContainer>
        <TableHeader>
          <div className="name">상호명</div>
          <div className="addr">주소</div>
        </TableHeader>
        <div>
          {data.map((item, index) => {
            const {
              name,
              id,
              upperAddrName,
              middleAddrName,
              roadName,
              firstBuildNo,
              secondBuildNo,
            } = item;
            return (
              <TableRow value={id} onClick={onClickShop} key={index}>
                <div className="name" value={id}>
                  {name}
                </div>
                <div
                  value={id}
                  className="addr"
                >{`${upperAddrName} ${middleAddrName} ${roadName} ${firstBuildNo} ${
                  secondBuildNo == 0 ? "" : "- " + secondBuildNo
                }`}</div>
              </TableRow>
            );
          })}
        </div>
        <FlexRowDiv>
          <div value={-1} onClick={onClickSetPage}>
            {"<"}
          </div>
          {page}
          <div value={1} onClick={onClickSetPage}>
            {">"}
          </div>
        </FlexRowDiv>
        <FlexRowDiv>
          <AdminButton>등록</AdminButton>
          <AdminButton onClick={() => setOpenModal(false)}>취소</AdminButton>
        </FlexRowDiv>
      </TableContainer>
    </div>
  );
}

export default Table;
