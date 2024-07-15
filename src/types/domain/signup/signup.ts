import { GENDER_RADIOS } from "assets";

export interface SignupForm {
  nickname: string;
  gender: (typeof GENDER_RADIOS)[number]["key"] | null;
  height: number;
  birth: {
    year: number;
    month: number;
    date: number;
  };
  profile: File | string | null;
}

export interface PostCheckNicknameQuery {
  userId: string;
  body: {
    nickname: string;
  };
}

export interface PutSignupQuery {
  userId: string;
  body: {
    nickname: string;
    gender: (typeof GENDER_RADIOS)[number]["key"];
    height: string;
    birthdate: string;
    profileImage: string;
  };
}
