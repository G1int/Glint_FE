import { PostImageQuery, PutProfileQuery } from "types";
import { ax } from "./axios";

export const putProfileAPI = async (userId: string, req: PutProfileQuery) => {
  const { data } = await ax.put(`/users/${userId}/profile`, req);

  return data;
};

export const putProfileImageAPI = async (
  userId: string,
  req: PostImageQuery
) => {
  const { data } = await ax.put(`/users/${userId}/profile-image`, req, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
