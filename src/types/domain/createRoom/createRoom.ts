import type { locationInfo } from "types";

//TODO: 타입 오류 발생해서 일단 리터럴 타입 삭제함
export interface age {
  minAge: number;
  maxAge: number;
}
export interface height {
  minHeight: number;
  maxHeight: number;
}

export interface createRoomForm {
  peopleCapacity: string;
  title: string;
  description: string;
  locations: locationInfo[] | null;
  maleConditions: {
    selectConditions: string[];
    affiliation: string[];
    religions: string;
    smoking: string;
    drinking: string;
    age: age;
    height: height;
  };
  femaleConditions: {
    selectConditions: string[];
    affiliation: string[];
    religions: string;
    smoking: string;
    drinking: string;
    age: age;
    height: height;
  };
}

export interface postCreateRoomQuery {
  body: {
    peopleCapacity: string;
    title: string;
    description: string;
    leaderUserId: string;
    locationIds: number[];
    maleConditions: {
      selectConditions: string[];
      affiliation: string[];
      religionIds: number[];
      smokingIds: number[];
      drinkingIds: number[];
      minAge: number;
      maxAge: number;
      minHeight: number;
      maxHeight: number;
    };
    femaleConditions: {
      selectConditions: string[];
      affiliation: string[];
      religionIds: number[];
      smokingIds: number[];
      drinkingIds: number[];
      minAge: number;
      maxAge: number;
      minHeight: number;
      maxHeight: number;
    };
  };
}

export interface putEditRoomQuery extends postCreateRoomQuery {
  meetingId: string;
}
