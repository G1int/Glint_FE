import type { PostImageQuery } from "types";
import { ax } from "./axios";

export const postImageAPI = async (req: PostImageQuery) => {
  const { data } = await ax.post("image/profile", req, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
