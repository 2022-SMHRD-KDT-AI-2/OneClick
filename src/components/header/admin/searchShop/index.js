import React, { useCallback, useState } from "react";
import { FlexRowDiv } from "../../../../styles";
import { Button, Input, NormalButton } from "../../../../pages/login/styles";
import { PresetButtons } from "../../../buttons/styles";
import styled from "@emotion/styled";
import useInput from "../../../../utils/useInput";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationData, userData } from "../../../../atom/atom";
import Table from "./table";

const SearchButton = styled(NormalButton)`
  width: 15%;
  margin-left: 1rem;
`;

const SearchLabel = styled.span`
  width: 15%;
  min-width: 110px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.3rem;
`;

const PageButton = styled.button`
  border: none;
  background-color: white;
  font-size: 2rem;
  margin: 0px 1rem 0px 1rem;
`;

const PageController = styled(FlexRowDiv)`
  justify-content: center;
`;

function SearchShop({ setOpenModal, setHasShop }) {
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const [page, setPage] = useState(1);
  const [searchedData, setSearchedData] = useState([]);
  const loc = useRecoilValue(locationData);
  const setUser = useSetRecoilState(userData);
  const onClickSearchButton = useCallback(() => {
    if (keyword) {
      axios
        .post("http://localhost:7501/shops/keyword", {
          keyword: keyword,
          page: page,
          lat: loc.lat,
          long: loc.long,
        })
        .then((res) => {
          setSearchedData(res.data.data.poi);
          setKeyword("");
        });
    } else {
      alert("검색어를 입력해주세요!");
    }
  }, [keyword, page, loc.lat, loc.long, setKeyword]);
  const onClickPageButton = async (e) => {
    const result = parseInt(e.target.value) + page;
    if (result >= 1) {
      await setPage(result);
      onClickSearchButton();
    }
  };
  const onClickTableItem = (e) => {
    const target = e.target.getAttribute("value");
    axios
      .post("http://localhost:7501/users/shop", { id: target })
      .then(async (res) => {
        if (res.data.success) {
          await setUser({
            admin: true,
            shop: target,
          });
          setHasShop(true);
        }
      });
  };

  return (
    <div>
      <FlexRowDiv>
        <SearchLabel>가게정보</SearchLabel>
        <Input name="keyword" value={keyword} onChange={onChangeKeyword} />
        <SearchButton onClick={onClickSearchButton}>검색</SearchButton>
      </FlexRowDiv>
      {searchedData.map((item, index) => {
        const {
          name,
          id,
          upperAddrName,
          middleAddrName,
          roadName,
          firstBuildNo,
          secondBuildNo,
        } = item;
        const addr = `${upperAddrName} ${middleAddrName} ${roadName} ${firstBuildNo} ${
          secondBuildNo === 0 ? "" : "- " + secondBuildNo
        }`;
        return (
          <Table
            shopId={id}
            title={name}
            addr={addr}
            key={index}
            onClickTableItem={onClickTableItem}
          />
        );
      })}

      <PageController>
        <PageButton value="-1" onClick={onClickPageButton}>
          ◀
        </PageButton>
        {page}
        <PageButton value="1" onClick={onClickPageButton}>
          ▶
        </PageButton>
      </PageController>
      <PresetButtons>
        <Button onClick={() => setOpenModal(false)}>취소</Button>
      </PresetButtons>
    </div>
  );
}

// ◀ ▶
export default SearchShop;

/*data.map((item, index) => {
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
        ></div>
      </TableRow>
  );
})*/
