import { atom } from "recoil";

export const profileState = atom({
  key: "profileState",
  default: {
    workName: "",
    universityName: "",
    universityDepartment: "",
    locationState: "",
    locationCity: "",
    religionId: "",
    smokingId: "",
    drinkingId: "",
    selfIntroduction: "",
    hashtags: [],
  },
});
