import { atom } from "recoil";

export const profileState = atom({
  key: "profileState",
  default: {
    workName: "",
    universityName: "",
    universityDepartment: "",
    locationState: "",
    locationCity: "",
    religionName: "",
    smokingName: "",
    drinkingName: "",
    selfIntroduction: "",
    hashtags: [],
  },
});
