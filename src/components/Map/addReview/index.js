import React from "react";
import "./modal.css";
import { reviewComment, reviewTitle } from "../../../utils/data";
import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../../../styles";
import { ButtonsClick } from "../styles";
import { Label } from "../../../pages/login/styles";

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px;
`;

const AddReviewModalContainer = styled.div`
  width: 900px;
  height: 600px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: row;
  padding: 25px;

  * {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled(FlexColumnDiv)`
  justify-content: center;
  flex-grow: 1.8;
`;

const ScoreContainer = styled(FlexColumnDiv)`
  justify-content: center;
  flex-grow: 2;

  > div > div {
    width: 100px;
  }
`;

const CommentContainer = styled(FlexColumnDiv)`
  width: 35%;

  > * {
    flex-grow: 1;
  }

  > div {
    border: 1px solid white;
    border-radius: 20px;
    margin: 5px;
  }
`;

const ButtonContainer = styled(FlexRowDiv)`
  flex-grow: 1;
  justify-content: center;

  > button {
    width: 30%;
  }
`;

function AddReview({ id }) {
  return (
    <AddReviewModalContainer>
      <CommentContainer>
        <h3>한줄평</h3>
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
      </CommentContainer>
      <FlexColumnDiv>
        <ScoreContainer>
          <Label>평가</Label>
          {reviewTitle.map((item, key) => {
            return (
              <FlexRowDiv key={key} style={{ justifyContent: "center" }}>
                <div>{item}</div>
                <input
                  id={id + reviewTitle[key]}
                  defaultValue={0}
                  style={{ width: "150px" }}
                />
                <div>/</div>
                <div>5</div>
              </FlexRowDiv>
            );
          })}
        </ScoreContainer>
        <ImageContainer>
          <Label>사진리뷰</Label>
          <input id={`${id}selectImage`} type="file" accept="image/*" />
          <Image id={`${id}image`} />
        </ImageContainer>
        <ButtonContainer>
          <ButtonsClick id={`${id}submitReview`}>등록</ButtonsClick>
          <ButtonsClick id={`${id}closeAddReview`}>취소</ButtonsClick>
        </ButtonContainer>
      </FlexColumnDiv>
    </AddReviewModalContainer>
  );
}

export default AddReview;
