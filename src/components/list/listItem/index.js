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
        border: "5px solid gray",
       
      }}>
    <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211122_246%2F1637574504180hm4HF_JPEG%2Fupload_3738f6c056530c843842efd81c0618b3.jpg"style={{
      width: "150px",
      height: "150px"
    }}></img>
    <div className="shop">
      <div className="content" style={{
        fontSize: "15px",
        margin: "0px",
        fontFamily:"ONE-Mobile-POP"
      }}>
         {/* 우측 라인 스타일(가게 상세 내용 공간) */}
          <p className="shop-name">상호명 | 시스살롱</p>
          <p className="division" style={{
            color: "gray"
          }}>분류 | 디저트 / 카페</p>
         <p className="complexity" style={{float:"left"}}>복잡도 | </p><div className="table"></div>
                  </div>
         
          

    </div>
    </div>
    

  </ListItemContainer>;
}

export default ListItem;
