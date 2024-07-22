import { atom, selector } from "recoil";
import { userDetailType, userProfileType } from "types";

export const profileState = atom({
  key: "profileState",
  default: {
    profileImageUrl: "",
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

export const userIdSelector = selector<string | null>({
  key: "userIdSelector",
  get: () => {
    return sessionStorage.getItem("id");
  },
});
export const userDetailState = atom<userDetailType | null>({
  key: "userDetailState",
  default: null,
});

export const userProfileState = atom<userProfileType | null>({
  key: "userProfileState",
  default: null,
});
