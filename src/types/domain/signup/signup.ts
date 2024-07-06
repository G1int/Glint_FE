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
