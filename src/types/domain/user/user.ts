export interface getUserResponse {
  id: number;
  email: string;
  role: "OAUTH_USER"; // TODO: role 추가 가능성 있음
  provider: string;
}
