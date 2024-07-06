export interface SignupForm {
  nickname: string;
  gender: "male" | "female";
  height: number;
  birth: {
    year: number;
    month: number;
    date: number;
  };
  profile: string | null;
}
