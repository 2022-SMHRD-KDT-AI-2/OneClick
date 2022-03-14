import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userData } from "../../../../atom/atom";
import { FlexColumnDiv, FlexRowDiv } from "../../../../styles";
import { Button, Input, Label } from "../../../../pages/login/styles";
import styled from "@emotion/styled";
import useInputJson from "../../../../utils/useInputJson";
import { PresetButtons } from "../../../buttons/styles";

const EditLabel = styled(Label)`
  width: 150px;
  margin-top: 0.3rem;
`;

const shopDataLabel = {
  name: "상호명",
  address: "주소",
  desc: "소개",
  tell: "연락처",
  url: "SNS",
};

function EditShop() {
  const [hasData, setHasData] = useState(false);
  const [user, setUser] = useRecoilState(userData);
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
      detailBizName: "",
      title_img_src: "",
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
    title_img_src,
  } = ownedShopData;
  useEffect(() => {
    if (user.shop) {
      axios
        .post("http://localhost:7501/shops/findbyid", {
          id: user.shop,
        })
        .then((res) => {
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
            detailBizName,
            title_img_src,
          } = res.data.data;
          setHasData(true);
          setOwnedShopData({
            name: name,
            address: address,
            desc: desc,
            tell: tell,
            url: url,
            tables: tables,
            occupied_tables: occupied_tables,
            parking: parking,
            parking_capacity: parking_capacity,
            opTime: opTime,
            breakTime: breakTime,
            upperBizName: upperBizName,
            middleBizName: middleBizName,
            lowerBizName: lowerBizName,
            detailBizName: detailBizName,
            title_img_src: title_img_src,
          });
        });
    }
  }, [user.shop]);

  return (
    hasData && (
      <FlexColumnDiv style={{ overflow: "scroll" }}>
        <FlexRowDiv>
          <EditLabel>대표이미지</EditLabel>
          <img src={title_img_src} />
          <input type="file" />
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
          /
          <Input
            value={parking}
            name="name"
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
          <EditLabel>메뉴</EditLabel>
        </FlexRowDiv>
        <PresetButtons>
          <Button>수정</Button>
          <Button>취소</Button>
        </PresetButtons>
      </FlexColumnDiv>
    )
  );
}

export default EditShop;

//1274399
