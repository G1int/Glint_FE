import { ax } from "./axios";

export const getStatesApi = async () => {
  const { data } = await ax.get("/locations/states");
  return data;
};

export const getCitiesApi = async (state: string) => {
  const { data } = await ax.get(`/locations/cities?state=${state}`);
  return data;
};
