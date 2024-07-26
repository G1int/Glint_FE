import { ax } from "./axios";

export const getStatesAPI = async () => {
  const { data } = await ax.get("/locations/states");
  return data;
};

export const getCitiesAPI = async (state: string) => {
  const { data } = await ax.get(`/locations/cities?state=${state}`);
  return data;
};
