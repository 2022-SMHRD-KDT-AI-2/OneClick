import React, { useEffect, useState } from "react";
import { userData, location } from "../../../atom/atom";
import { useRecoilValue } from "recoil";
import { ModalBackground } from "../../../styles";
import { AdminModal, ModalButton } from "../styles";
import axios from "axios";
import styled from "@emotion/styled";
import Table from "./table";

function Admin({ setOpenModal }) {
  const user = useRecoilValue(userData);
  const loc = useRecoilValue(location);
  const [hasOwnShop, setHasOwnShop] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState(null);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    if (user.shop) setHasOwnShop(user.shop);
  }, []);

  const onClickSearchButton = () => {
    axios
      .post("http://localhost:7501/shops/keyword", {
        keyword: keyword,
        page: page,
        lat: loc.lat,
        long: loc.long,
      })
      .then((res) => {
        setSearchData(res.data.data);
      });
  };

  return (
    <ModalBackground onClick={() => setOpenModal(false)}>
      <AdminModal onClick={(e) => e.stopPropagation()}>
        {hasOwnShop ? null : (
          <div>
            <div>
              <label>가게검색</label>
              <input value={keyword} onChange={onChangeKeyword} />
              <button onClick={onClickSearchButton}>검색</button>
            </div>
            <div></div>
          </div>
        )}
        {searchData && (
          <Table
            data={searchData.poi}
            setOpenModal={setOpenModal}
            page={page}
            setPage={setPage}
            setSearchData={setSearchData}
            keyword={keyword}
            lat={loc.lat}
            long={loc.long}
          />
        )}
      </AdminModal>
    </ModalBackground>
  );
}

export default Admin;

/*<div>
  <ModalButton>수정</ModalButton>
  <ModalButton onClick={() => setOpenModal(false)}>취소</ModalButton>
</div>*/
