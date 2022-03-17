import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userData } from "../../../../atom/atom";
import { FlexColumnDiv, FlexRowDiv } from "../../../../styles";
import { Button, Input, Label } from "../../../../pages/login/styles";
import styled from "@emotion/styled";
import useInputJson from "../../../../utils/useInputJson";
import { PresetButtons } from "../../../buttons/styles";
import MenuModal from "../menuModal";
import Menu from "../menu";
import useSelectImage from "../../../../utils/useSelectImage";

const EditLabel = styled(Label)`
  width: 150px;
  margin-top: 0.3rem;
  text-align: center;
`;

const EditContent = styled(Label)`
  width: 700px;
  overflow: scroll;
`;

const EditInput = styled(Input)`
  width: 80%;
`;

function EditShop({ setOpenModal }) {
  const [hasData, setHasData] = useState(false);
  const user = useRecoilValue(userData);
  const [imageBase64, image, onChangeImage] = useSelectImage();
  const [openMenu, setOpenMenu] = useState(false);
  const [menu, setMenu] = useState([]);

  const [ownedShopData, onChangeOwnedShopData, setOwnedShopData] = useInputJson(
    {
      name: "",
      address: "",
      desc: "",
      tell: "",
      url: "",
      tables: "",
      occupied_tables: "",
      parking: "",
      parking_capacity: "",
      opTime: "",
      breakTime: "",
      upperBizName: "",
      middleBizName: "",
      lowerBizName: "",
      title_img: "",
    }
  );

  const {
    name,
    address,
    desc,
    tell,
    url,
    tables,
    occupied_tables,
    parking,
    opTime,
    breakTime,
    upperBizName,
    title_img,
    parking_capacity,
  } = ownedShopData;

  const fetchData = () => {
    axios
      .post("http://localhost:7501/shops/findbyid", {
        id: user.shop,
      })
      .then((res) => {
        setHasData(true);
        setOwnedShopData(res.data.shop);
        setMenu(res.data.menu);
      });
  };

  useEffect(() => {
    if (user.shop) {
      fetchData();
    }
  }, [user.shop]);

  const onClickEditButton = () => {
    const formData = new FormData();
    formData.append("img", image);
    formData.append("id", user.shop);
    formData.append("desc", desc);
    formData.append("tell", tell);
    formData.append("url", url);
    formData.append("upperBizName", upperBizName);
    formData.append("parking_capacity", parking_capacity);
    formData.append("table", tables);
    formData.append("occupied_tables", occupied_tables);
    formData.append("opTime", opTime);
    formData.append("breakTime", breakTime);
    axios.post("http://localhost:7501/shops/editinfo", formData).then((res) => {
      if (res.data.success) fetchData();
    });
  };

  return (
    hasData && (
      <FlexColumnDiv style={{ overflow: "scroll" }}>
        {openMenu && <MenuModal setOpenMenu={setOpenMenu} />}
        <FlexRowDiv>
          <EditLabel>대표이미지</EditLabel>
          <img
            src={
              imageBase64 ? imageBase64 : `http://localhost:7501${title_img}`
            }
            alt="title"
            style={{ width: "250px", height: "250px" }}
          />
          <input type="file" onChange={onChangeImage} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>상호명</EditLabel>
          <EditContent>{name}</EditContent>
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>주소</EditLabel>
          <EditContent>{address}</EditContent>
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>소개</EditLabel>
          <EditInput
            value={desc}
            name="desc"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>연락처</EditLabel>
          <EditInput
            value={tell}
            name="tell"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>SNS</EditLabel>
          <EditInput value={url} name="url" onChange={onChangeOwnedShopData} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>분류-대</EditLabel>
          <EditInput
            value={upperBizName}
            name="upperBizName"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>주차</EditLabel>
          <Input
            value={parking_capacity}
            name="parking_capacity"
            onChange={onChangeOwnedShopData}
            style={{ width: "150px" }}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>테이블현황</EditLabel>
          <Input
            value={occupied_tables}
            name="occupied_tables"
            onChange={onChangeOwnedShopData}
            style={{ width: "150px" }}
          />
          {" OF THE"}
          <Input
            value={tables}
            name="tables"
            onChange={onChangeOwnedShopData}
            style={{ width: "150px" }}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>영업시간</EditLabel>
          <EditInput
            value={opTime}
            name="opTime"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>휴게시간</EditLabel>
          <EditInput
            value={breakTime}
            name="breakTime"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <FlexColumnDiv>
            <EditLabel>메뉴</EditLabel>
            <Button fetchData={fetchData} onClick={() => setOpenMenu(true)}>
              추가
            </Button>
          </FlexColumnDiv>
          <FlexRowDiv
            style={{
              overflow: "scroll",
            }}
          >
            {menu &&
              menu.map((item, index) => {
                return <Menu menu={item} key={index + menu} />;
              })}
          </FlexRowDiv>
        </FlexRowDiv>
        <PresetButtons>
          <Button onClick={onClickEditButton}>수정</Button>
          <Button onClick={() => setOpenModal(false)}>취소</Button>
        </PresetButtons>
      </FlexColumnDiv>
    )
  );
}

export default EditShop;

//1274399
