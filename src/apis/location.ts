import type { GetCitiesResponse, GetStatesResponse } from "types";
import { ax } from "./axios";

export const getStatesAPI = async () => {
  const { data } = await ax.get<GetStatesResponse>("/locations/states");
  return data;
};

export const getCitiesAPI = async (state: string) => {
  const { data } = await ax.get<GetCitiesResponse>(
    `/locations/cities?state=${state}`
  );
  return data;
};
