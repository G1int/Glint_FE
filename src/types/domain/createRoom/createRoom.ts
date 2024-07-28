import { SELECT_CONDITIONS } from "assets";
import type { locationInfo } from "types";

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
    selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
    affiliation: string[];
    religions: string;
    smoking: string;
    drinking: string;
    age: age;
    height: height;
  };
  femaleConditions: {
    selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
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
      selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
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
      selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
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
