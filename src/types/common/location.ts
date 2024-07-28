export type GetStatesResponse = string[];

export interface GetCitiesResponse {
  locations: {
    locationId: number;
    locationState: string;
    locationCity: string;
  }[];
}

export type locationInfo = { id: number; locationName: string };
