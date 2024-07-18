import { useQuery } from "@tanstack/react-query";
import { getCitiesApi, getStatesApi } from "apis/location";

export const useGetStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: () => getStatesApi(),
  });
};

export const useGetCities = (state: string) => {
  return useQuery({
    queryKey: ["cities", state],
    queryFn: () => getCitiesApi(state),
    enabled: !!state,
  });
};
