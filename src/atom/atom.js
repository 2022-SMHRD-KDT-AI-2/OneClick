import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    shop: null,
    preset: [],
  },
});

export const location = atom({
  key: "location",
  default: {
    lat: null,
    long: null,
  },
});

export const shopData = atom({
  key: "shopData",
  default: [],
});
