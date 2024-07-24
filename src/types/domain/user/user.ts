export interface getUserResponse {
  id: number;
  email: string;
  role: "OAUTH_USER"; // TODO: role 추가 가능성 있음
  provider: string;
}

export interface getUserInfoResponse {
  userId: number;
  userDetail: userDetailType;
  userProfile: userProfileType;
}

export interface userDetailType {
  id: number;
  userId: number;
  nickname: string;
  gender: string;
  birthdate: string;
  age: string;
  height: number;
  profileImage: string;
}

export interface workType {
  workId: number;
  workName: string;
  workCategory: {
    workCategoryId: number;
    workCategoryName: string;
  };
}

export interface universityType {
  universityId: number;
  universityName: string;
  universityDepartment: string;
  universityCategory: {
    universityCategoryId: number;
    universityCategoryName: string;
  };
}

export interface locationType {
  locationId: number;
  locationState: string;
  locationCity: string;
}

export interface religionType {
  religionId: number;
  religionName: string;
}

export interface smokingType {
  smokingId: number;
  smokingName: string;
}

export interface drinkingType {
  drinkingId: number;
  drinkingName: string;
}

export interface userProfileType {
  id: number;
  work: workType;
  university: universityType;
  location: locationType;
  religion: religionType;
  smoking: smokingType;
  drinking: drinkingType;
  selfIntroduction: string;
  hashtags: string[];
}
