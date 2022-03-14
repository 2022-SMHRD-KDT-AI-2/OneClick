import { renderToString } from "react-dom/server";
import AddReview from "./addReview";
import Marker from "./marker";
import Review from "./review";
import { reviewTitle } from "../../utils/data";

const { Tmapv2 } = window;

export class Shop {
  constructor(map, data) {
    this.map = map;
    this.data = data;
  }

  setMarker = () => {
    this.marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(this.data.lat, this.data.long),
      iconHTML: renderToString(<Marker data={this.data} />),
      map: this.map,
    });
  };

  setReview = () => {
    this.review = new Tmapv2.InfoWindow({
      position: new Tmapv2.LatLng(this.data.lat, this.data.long),
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
          .getElementById(this.data.id + "selectImage")
          .addEventListener("change", (e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
              let img = document.getElementById(this.data.id + "image");
              img.src = reader.result;
            };
          });

        for (let i = 0; i < 10; i += 1) {
          let comment = document.getElementById(
            this.data.id + "addReview_comment" + i
          );
          comment.addEventListener("click", (e) => {
            e.target.value = !e.target.value;
            if (e.target.value) {
              comment.style.border = "1px solid #007cb9";
              comment.style.backgroundColor = "007cb9";
              comment.style.borderRadius = "20px";
            } else {
              comment.style.border = "1px solid white";
              comment.style.color = "black";
            }
          });
        }

        document
          .getElementById(this.data.id + "submitReview")
          .addEventListener("click", () => {
            const score = [];
            const comment = [];
            reviewTitle.forEach((item, index) => {
              score.push(document.getElementById(this.data.id + item).value);
            });
            for (let i = 0; i < 10; i++) {
              if (
                document.getElementById(this.data.id + "addReview_comment" + i)
                  .value
              ) {
                comment.push(i);
              }
            }
            console.log(score);
            console.log(comment);
          });

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
      position: new Tmapv2.LatLng(this.data.lat, this.data.long),
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
