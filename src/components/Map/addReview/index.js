import React from "react";
import "./modal.css";
import { reviewComment, reviewTitle } from "../../../utils/data";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px;
`;

function AddReview({ id }) {
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
            textAlign: "center",
          }}
        >
          <p className="title">
            <h3 style={{ margin: 7, fontSize: 20 }}>평가</h3>
            {reviewTitle.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
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
                        id={id + reviewTitle[key]}
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
            <h3 style={{ margin: 6, fontSize: 20 }}>사진리뷰</h3>
            <input id={`${id}selectImage`} type="file" accept="image/*" />
            <div
              className="img"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image id={`${id}image`}></Image>
            </div>
          </p>
        </div>
        <div className="reviewList" style={{ textAlign: "center" }}>
          <h3 style={{ margin: 7, fontSize: 20 }}>한줄평</h3>
          {reviewComment.map((item, key) => {
            return (
              <div
                id={`${id}addReview_comment${key}`}
                name={key}
                key={key}
                value={false}
                className="box"
                style={{ margin: 6 }}
              >
                {item.title}
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
