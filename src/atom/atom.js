import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    shop: null,
  },
});

export const presetData = atom({
  key: "presetData",
  default: [],
});

export const locationData = atom({
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
