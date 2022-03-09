import React from "react";
import styled from "@emotion/styled";
import "./index.css"
const ListItemContainer = styled.div`
  border-radius: 4px;
  border: 1px solid gray;
  width: 95%;
  height: 100%;
  margin-top: 40px;
`;

function ListItem() {
  return <ListItemContainer>
    
    {/* 좌측 라인 스타일(가게 이미지 들어갈 공간) */}
    <div className="img" style={{
        display: "flex",
        borderTop: "5px solid gray",
        borderLeft: "5px solid gray"
      }}>
    <image src= 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDFfMzYg%2FMDAxNjM1Njk3NDIwNTU5.UHdC_gYLLoABUPwHWmoiS9Grn1usNX_L0cdNc-M_Bkcg.qv9p5ND74MgZtGm3nuWqjrSUKeMSrcC4KSIayO_OZxEg.JPEG.kgpdnjs1998%2FIMG_4506.JPG' width='50' height='50'></image>
    <div class="shop">
      <div class="content" style={{
        fontSize: "15px",
        margin: "0px",
        fontFamily:"ONE-Mobile-POP"
      }}>
         {/* 우측 라인 스타일(가게 상세 내용 공간) */}
          <p className="shop-name">상호명 | 시스살롱</p>
          <p className="division" style={{
            color: "gray"
          }}>분류 | 디저트 / 카페</p>
          <p className="shop-dwelling">주소 | 광주 동구 백서로 219 광주 동구 동명동 140-13 61466</p>
          

    </div>
    </div>
          {/* 오른쪽 상단 배너에 가게 혼잡도 컬러 넣기 */}
          

        
        <div className="box2" style={{
          flexDirection: "columns",
          color: "black",
          borderRight: "5px solid gray"
        }}>
        <div style={{
          textAlign: "right"
        }}>
           </div>
            {/* 컬러(스타일) 클래스 */}
            <div className="table"></div>
        </div>
      </div>
  </ListItemContainer>;
}

export default ListItem;
