import React, { useState } from "react";
import "./modal.css";
import "./StarRating";

import { comment } from "../../../utils/data";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

function AddReview({ id }) {
  const reviewPoints = ["맛", "가격", "청결도", "접근성", "분위기"];
  const [commentState, setCommentState] = useState([
    {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    },
  ]);

  const onClickComment = (e) => {
    console.log("asdf");
    let temp = commentState.slice();
    temp[0][e.target.name] = !temp[0][e.target.name];
    setCommentState([...temp]);
  };

  return (
    <div className="modalContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="firstbox"
          style={{
            width: "60%",
          }}
        >
          <p className="title">
            <h3 style={{ margin: 10 }}>평가</h3>
            {reviewPoints.map((item, key) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <p
                      style={{
                        width: "50px",
                        margin: 4,
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <input
                        id={id + reviewPoints[key]}
                        defaultValue={0}
                        style={{ width: "30px" }}
                      />
                      / 5
                    </div>
                  </div>
                </div>
              );
            })}
          </p>
          <p className="body">
            <h3 style={{ margin: 4 }}>사진리뷰</h3>
            <input id={`${id}selectImage`} type="file" accept="image/*" />
            <div
              className="img"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image id={`${id}image`}></Image>
            </div>
          </p>
        </div>
        <div className="reviewList">
          <h3 style={{ margin: 10 }}>한줄평</h3>
          {comment.map((item, key) => {
            return (
              <div
                id={`${id}addReview_comment${key}`}
                name={key}
                key={key}
                value={false}
                className="box"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <button id={`${id}submitReview`}>등록</button>
        <button id={`${id}closeAddReview`}>취소</button>
      </div>
    </div>
  );
}

export default AddReview;
