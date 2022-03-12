import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    shop: 12341234,
    preset: [],
    loc: {
      lat: null,
      long: null,
    },
  },
});

export const shopData = atom({
  key: "shopData",
  default: [],
});
