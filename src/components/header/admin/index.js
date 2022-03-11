import React, { useEffect, useState } from "react";
import { userData } from "../../../atom/atom";
import { useRecoilValue } from "recoil";
import ResultTable from "./resultTable";
import ShopInfo from "./shopInfo";
import { ModalBackground } from "../../../styles";
import { AdminModal, ModalButton } from "../styles";

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
          <ModalButton>수정</ModalButton>
          <ModalButton onClick={() => setOpenModal(false)}>취소</ModalButton>
        </div>
      </AdminModal>
    </ModalBackground>
  );
}

export default Admin;
