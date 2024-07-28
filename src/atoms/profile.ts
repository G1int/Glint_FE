import { atom, selector } from "recoil";

import { GENDER_RADIOS } from "assets";
import { PutProfileQuery, userDetailType, userProfileType } from "types";

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

export const userGenderState = atom<
  (typeof GENDER_RADIOS)[number]["key"] | null
>({
  key: "userGender",
  default: null,
});

export const genderSelector = selector({
  key: "genderSelector",
  get: ({ get }) => {
    const userDetail = get(userDetailState);

    return {
      gender: userDetail?.gender,
    };
  },
});

export const updatedProfileSelector = selector<PutProfileQuery>({
  key: "updatedProfileSelector",
  get: ({ get }) => {
    const changeProfile = get(profileState);
    const userDetail = get(userDetailState);
    const userProfile = get(userProfileState);

    return {
      profileImageUrl:
        changeProfile.profileImageUrl || userDetail?.profileImage || "",
      workName: changeProfile.workName || userProfile?.work?.workName || "",
      universityName:
        changeProfile.universityName ||
        userProfile?.university?.universityName ||
        "",
      universityDepartment:
        changeProfile.universityDepartment ||
        userProfile?.university?.universityDepartment ||
        "",
      locationState:
        changeProfile.locationState ||
        userProfile?.location?.locationState ||
        "",
      locationCity:
        changeProfile.locationCity || userProfile?.location?.locationCity || "",
      religionId:
        changeProfile.religionId ||
        userProfile?.religion?.religionId.toString() ||
        "",
      smokingId:
        changeProfile.smokingId ||
        userProfile?.smoking?.smokingId.toString() ||
        "",
      drinkingId:
        changeProfile.drinkingId ||
        userProfile?.drinking?.drinkingId.toString() ||
        "",
      selfIntroduction:
        changeProfile.selfIntroduction || userProfile?.selfIntroduction || "",
      hashtags: changeProfile.hashtags.length
        ? changeProfile.hashtags
        : userProfile?.hashtags || [],
    };
  },
});
