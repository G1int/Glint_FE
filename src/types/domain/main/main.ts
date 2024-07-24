export interface meetingsItem {
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

export interface meetingsResponse {
  meetings: meetingsItem[];
}
