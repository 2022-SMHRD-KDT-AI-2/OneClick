import React,{useState,useEffect} from "react";
import "./modal.css";
import StarRating from "./StarRating";
import "./StarRating";

function Review({ setOpenModal }) {
    const reviewPoints = ["맛","가격","청결도","접근성","분위기"]

    const oneReview =["🙂'음식이 맛있어요'","🖼'인테리어가 멋져요'","🍽'혼밥하기 좋아요'","💳'가성비가 좋아요'",
                      "🌱'매장이 청결해요'","🏩'매장이 넓어요'","🚗'주차하기 편해요'","💐'특별한 날 가기 좋아요'",
                      "📷'사진이 잘 나와요'","👍🏻'친절해요'"]

    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일	
    // 테두리 하이라이트 함수

    const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
       }
    }
      if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
       } 
    }

    return (

        <div className="modalContainer">
          <div style={{
            display:"flex",
            flexDirection:"row"
          }}>
            <div className="firstbox" style={{
              width:"60%"
            }}>
            <p className="title">
              <h3 style={{margin:10}}>평가</h3>
              {reviewPoints.map((item, key) => {
                return (
                  <div style={{
                    display: "flex",
                    flexDirection: "row"
                  }}>
                      <div>
                       <p style={{
                          width:"50px",margin:4,textAlign:"center"
                        }}>{item}
                       </p>
                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                      <StarRating/>
                      </div>
                  </div>
                )
              })}
            </p>
            <p className="body">
              <h3 style={{margin:4}}>사진리뷰</h3>
              <input type="file" accept="image/*" onChange={handleChangeFile}/>
              <div className="img" style={{
                display:"flex",flexDirection:"row"
              }}>
                <img className="boximg" src={imgBase64} ></img>
              </div>
            </p>
            </div>
            <div className="reviewList">
              <h3 style={{margin:10}}>한줄평</h3>
              {oneReview.map((item,key) => {
                return (
                  <button className="box" style={{
                    backgroundColor:"white",
                    borderRadius:"40px"
                  }}>{item}</button>
                )
              })}
            </div>
          </div>
          <div className="footer" >
            <button>등록</button>
            <button id="cancelBtn"> 취소 </button>
          </div>
        </div>
        

    );
  }

export default Review;