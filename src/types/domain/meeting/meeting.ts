import { GENDER_RADIOS } from "assets";

export interface chatsResponseItem {
  id: number;
  userId: number;
  chatRoomId: number;
  nickname: string;
  message: string;
  sendDate: string;
  userProfileImageUrl: string | null;
}

export interface chatsResponse {
  chats: chatsResponseItem[];
}

interface Conditions {
  selectConditions: string[];
  affiliation: string[];
  minAge: number;
  maxAge: number;
  maxHeight: number;
  minHeight: number;
  religion: {
    religionId: number;
    religionName: "무교" | "기독교" | "천주교" | "불교" | "기타";
  }[];
  smoking: { smokingId: number; smokingName: "흡연" | "비흡연" }[];
  drinking: {
    drinkingId: number;
    drinkingName:
      | "마시지 않음"
      | "가끔 마심"
      | "어느정도 즐김"
      | "좋아하는 편"
      | "기타";
  }[];
}

export interface GetMeetingResponse {
  joinRequestUserIds: number[];
  id: number;
  leaderUserId: number;
  title: string;
  description: string;
  users: [
    {
      id: number;
      profileImage: string;
      nickname: string;
      gender: (typeof GENDER_RADIOS)[number]["key"];
      affiliation: string;
      age: number;
    }
  ];
  locations: string[];
  maleCondition: Conditions;
  femaleCondition: Conditions;
  peopleCapacity: number;
  status: "WAITING" | "ACCEPTED";
}

export interface meetingListItem {
  meetingId: number;
  maleCount: number;
  femaleCount: number;
  maleAgeRange: {
    minAge: number;
    maxAge: number;
  };
  femaleAgeRange: {
    minAge: number;
    maxAge: number;
  };
  title: string;
  status: "WAITING" | "ACCEPTED";
  meetingImage: string;
  locations: string[];
  peopleCapacity: number;
}

export interface getMeetingListResponse {
  meetings: meetingListItem[];
}

export interface getSearchMeetingResponse {
  meetings: meetingListItem[];
  totalCount: number;
}

export interface getCurrentSearchKeywordItem {
  id: string;
  keyword: string;
  userId: string;
  createAt: string;
}

export interface getCurrentSearchKeywordResponse {
  searchKeywords: getCurrentSearchKeywordItem[];
}

export interface postAttendMeetingRoomQuery {
  meetingId: string;
  userId: string;
}

export interface putOutMeetingQuery {
  meetingId: string;
  userId: string;
}

export interface putJoinMeetingQuery {
  meetingId: string;
  userId: string;
}

export interface getMeetingJoinsQuery {
  meetingId: string;
  query?: { lastJoinMeetingId: string };
}

export interface getMeetingJoinsResponse {
  userJoinMeetings: {
    joinMeetingId: number;
    userId: number;
    profileImage: string;
    nickname: string;
    age: number;
    gender: (typeof GENDER_RADIOS)[number]["key"];
    affiliation: string;
  }[];
}
