export interface SignupForm {
  nickname: string;
  gender: "FEMALE" | "MALE" | null;
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

export interface PostSignupQuery {
  userId: string;
  body: {
    nickname: string;
    gender: "FEMALE" | "MALE";
    height: string;
    birthdate: string;
    profileImage: string;
  };
}
