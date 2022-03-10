import styled from "@emotion/styled";
import { renderToString } from "react-dom/server";
import Review from "./review";
import Marker from "./marker";

const MarkerContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 50px;
  padding: 0 10px;
  align-items: center;
  border: 2px solid #2b6bf3;
`;

const { Tmapv2 } = window;

export class Shop {
  constructor(map, data) {
    this.map = map;
    this.data = data;
  }

  setMarker = () => {
    this.marker = new Tmapv2.Marker({
      position: this.data.loc,
      iconHTML: renderToString(<Marker />),
      map: this.map,
    });
  };

  setReviewModal = () => {
    this.review = new Tmapv2.InfoWindow({
      position: this.data.loc,
      background: false,
      border: "0px solid white",
      content: renderToString(<Review />),
      type: 2,
      align: 15,
      visible: false,
      map: this.map,
    });

    this.marker.addListener("click", () => {
      this.review.setVisible(true);
    });
  };
}
