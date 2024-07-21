import { SELECT_CONDITIONS } from "assets";

export interface age {
  minAge: number | null;
  maxAge: number | null;
}
export interface height {
  minHeight: number | null;
  maxHeight: number | null;
}

export interface createRoomForm {
  peopleCapacity: string;
  title: string;
  description: string;
  locationIds: number[] | null;
  maleConditions?: {
    selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
    affiliation: string[];
    religions: string;
    smoking: string;
    drinking: string;
    age: age;
    height: height;
  };
  femaleConditions?: {
    selectConditions: (typeof SELECT_CONDITIONS)[number]["key"][];
    affiliation: string[];
    religions: string;
    smoking: string;
    drinking: string;
    age: age;
    height: height;
  };
}
