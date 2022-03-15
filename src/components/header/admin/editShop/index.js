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

const EditLabel = styled(Label)`
  width: 150px;
  margin-top: 0.3rem;
`;

function EditShop({ setOpenModal }) {
  const [hasData, setHasData] = useState(false);
  const [image, setImage] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const user = useRecoilValue(userData);
  const [openMenu, setOpenMenu] = useState(false);
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
    parking_capacity,
    opTime,
    breakTime,
    upperBizName,
    middleBizName,
    lowerBizName,
    title_img,
  } = ownedShopData;
  useEffect(() => {
    if (user.shop) {
      axios
        .post("http://localhost:7501/shops/findbyid", {
          id: user.shop,
        })
        .then((res) => {
          setHasData(true);
          setOwnedShopData(res.data.data);
        });
    }
  }, [user.shop, setOwnedShopData]);

  const onClickEditButton = () => {
    const formData = new FormData();
    formData.append("img", image);
    formData.append("data", {
      id: user.shop,
      data: ownedShopData,
    });
    axios.post("http://localhost:7501/shops/editinfo", formData).then((res) => {
      if (res.data.success) setOpenModal(false);
    });
  };

  const onChangeImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageBase64(reader.result);
      setImage(e.target.files[0]);
    };
  };

  return (
    hasData && (
      <FlexColumnDiv style={{ overflow: "scroll" }}>
        {openMenu && <MenuModal setOpenMenu={setOpenMenu} />}
        <FlexRowDiv>
          <EditLabel>대표이미지</EditLabel>
          <img
            src={imageBase64 ? imageBase64 : title_img}
            alt="title"
            style={{ width: "250px" }}
          />
          <input type="file" onChange={onChangeImage} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>상호명</EditLabel>
          <Input value={name} name="name" onChange={onChangeOwnedShopData} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>주소</EditLabel>
          <Input
            value={address}
            name="address"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>소개</EditLabel>
          <Input value={desc} name="desc" onChange={onChangeOwnedShopData} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>연락처</EditLabel>
          <Input value={tell} name="tell" onChange={onChangeOwnedShopData} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>SNS</EditLabel>
          <Input value={url} name="url" onChange={onChangeOwnedShopData} />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>분류-대</EditLabel>
          <Input
            value={upperBizName}
            name="upperBizName"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>분류-중</EditLabel>
          <Input
            value={middleBizName}
            name="middleBizName"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>분류-소</EditLabel>
          <Input
            value={lowerBizName}
            name="lowerBizName"
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
          <EditLabel>{parking ? " 대 가능" : " 불가능"}</EditLabel>
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>테이블현황</EditLabel>
          <Input
            value={occupied_tables}
            name="occupied_tables"
            onChange={onChangeOwnedShopData}
            style={{ width: "150px" }}
          />
          /
          <Input
            value={tables}
            name="tables"
            onChange={onChangeOwnedShopData}
            style={{ width: "150px" }}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>영업시간</EditLabel>
          <Input
            value={opTime}
            name="opTime"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <EditLabel>휴게시간</EditLabel>
          <Input
            value={breakTime}
            name="breakTime"
            onChange={onChangeOwnedShopData}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <FlexColumnDiv>
            <EditLabel>메뉴</EditLabel>
            <Button onClick={() => setOpenMenu(true)}>추가</Button>
          </FlexColumnDiv>
          메뉴 출력해주기
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
