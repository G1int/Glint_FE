export interface SignupForm {
  nickname: string;
  gender: "male" | "female" | null;
  height: number;
  birth: {
    year: number;
    month: number;
    date: number;
  };
  profile: string | null;
}

export interface PostCheckNicknameQuery {
  userId: string;
  body: {
    nickname: string;
  };
}

export interface PostSignup {
  userId: string;
  body: {
    nickname: string;
    gender: "FEMALE" | "MALE";
    height: number;
    birth: string;
    profileImage: string;
  };
}
