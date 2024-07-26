import { useQuery } from "@tanstack/react-query";
import { getCitiesAPI, getStatesAPI } from "apis";

export const useGetStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: () => getStatesAPI(),
  });
};

export const useGetCities = (state: string) => {
  return useQuery({
    queryKey: ["cities", state],
    queryFn: () => getCitiesAPI(state),
    enabled: !!state,
  });
};
