export interface PutProfileQuery {
  workName: string;
  universityName: string;
  universityDepartment: string;
  locationState: string;
  locationCity: string;
  religionName: string;
  smokingName: string;
  drinkingName: string;
  selfIntroduction: string;
  hashtags: string[];
}

// TODO: API 수정 후 수정 예정
export interface getProfileResponse {
  id: number;
  userId: number;
  nickname: string;
  age: number;
  workId: number;
  workCategoryId: number;
  workName: string;
  universityId: number;
  universityCategoryId: number;
  universityName: string;
  universityDepartment: string;
  locationId: number;
  locationState: string;
  locationCity: string;
  religionId: number;
  religionName: string;
  smokingId: number;
  smokingName: string;
  drinkingId: number;
  drinkingName: string;
  selfIntroduction: string;
  hashtags: string[];
}
