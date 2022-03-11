import React, { useEffect, useState } from "react";
import { userData } from "../../../atom/atom";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import ResultTable from "./resultTable";
import ShopInfo from "./shopInfo";

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const AdminModal = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const data = [
  { title: "asdf", addr: "asdf" },
  { title: "asdf", addr: "asdf" },
  {
    title: "asdf",
    addr: "asdf",
  },
  {
    title: "asasdfasdfasdfasdfasdfdf",
    addr: "aasdfasdfasdfasdfasdasdfasdfasdfasdfsdf",
  },
];

const shopInfo = {
  title: "asdf",
  addr: "asdf",
  desc: "asdf",
};

const Button = styled.button``;

function Admin({ setOpenModal }) {
  const user = useRecoilValue(userData);
  const [hasOwnShop, setHasOwnShop] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    // user.admin  << false to main
    // user.shop << shop id
    if (user.shop) setHasOwnShop(user.shop);
  }, []);

  const onSubmit = () => {
    setHasResult(true);
  };

  return (
    <ModalBackground onClick={() => setOpenModal(false)}>
      <AdminModal onClick={(e) => e.stopPropagation()}>
        {hasOwnShop ? (
          Object.keys(shopInfo).map((item, key) => {
            return <ShopInfo dataName={item} data={shopInfo[item]} />;
          })
        ) : (
          <div>
            <div>
              <label>가게검색</label>
              <input />
              <button onClick={onSubmit}>검색</button>
            </div>
            <div>
              <ResultTable title={"상호명"} addr={"주소"} />
              {hasResult &&
                data.map((item, key) => {
                  return (
                    <ResultTable
                      title={item.title}
                      addr={item.addr}
                    ></ResultTable>
                  );
                })}
            </div>
          </div>
        )}
        <div>
          <Button>수정</Button>
          <Button onClick={() => setOpenModal(false)}>취소</Button>
        </div>
      </AdminModal>
    </ModalBackground>
  );
}

export default Admin;
