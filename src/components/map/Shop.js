import styled from "@emotion/styled";
import { renderToString } from "react-dom/server";
import AddReview from "./addReview";
import Marker from "./marker";
import Review from "./review";

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

  setReview = () => {
    this.review = new Tmapv2.InfoWindow({
      position: this.data.loc,
      background: false,
      border: "0px solid white",
      content: renderToString(<Review data={this.data} />),
      type: 2,
      align: 15,
      visible: false,
      map: this.map,
    });
    this.setAddReview();
    document.getElementById(this.data.id).addEventListener("click", () => {
      this.review.setVisible(false);
    });
    this.marker.addListener("click", () => {
      this.review.setVisible(true);
    });
    document
      .getElementById(this.data.id + "addReview")
      .addEventListener("click", () => {
        this.review.setVisible(false);
        this.addReview.setVisible(true);
        document
          .getElementById(this.data.id + "closeAddReview")
          .addEventListener("click", () => {
            this.addReview.setVisible(false);
            this.review.setVisible(true);
          });
      });
  };

  setAddReview = () => {
    this.addReview = new Tmapv2.InfoWindow({
      position: this.data.loc,
      background: false,
      border: "0px solid white",
      content: renderToString(<AddReview id={this.data.id} />),
      type: 2,
      align: 15,
      visible: false,
      map: this.map,
    });
  };
}
