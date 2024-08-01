import { useQuery } from "@tanstack/react-query";
import { getCitiesAPI, getLocationsAPI, getStatesAPI } from "apis";
import { GetLocationsQuery } from "types";

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

export const useGetLoctaions = (req: GetLocationsQuery, enabled?: boolean) => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocationsAPI(req),
    enabled,
  });
};
