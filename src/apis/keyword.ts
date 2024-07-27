import { type getCurrentSearchKeywordResponse } from "types";
import { ax } from "./axios";

export const getCurrentSearchKeywordAPI = async (
  userId: string,
  limit: number | null
) => {
  let url = `/search-keywords/users/${userId}`;

  if (limit !== null) {
    url += `?limit=${limit}`;
  }
  const { data } = await ax.get<getCurrentSearchKeywordResponse>(url);

  return data;
};

export const deleteCurrentKeywordAPI = async (searchKeywordId: string) => {
  const { data } = await ax.delete(`/search-keywords/${searchKeywordId}`);

  return data;
};
