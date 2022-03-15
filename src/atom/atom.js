import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    shop: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const presetData = atom({
  key: "presetData",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const locationData = atom({
  key: "location",
  default: {
    lat: null,
    long: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const shopData = atom({
  key: "shopData",
  default: null,
});
