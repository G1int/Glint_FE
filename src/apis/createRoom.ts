import type { postCreateRoomQuery } from "types";
import { ax } from "./axios";

export const postCreateRoomAPI = async (req: postCreateRoomQuery) => {
  const { data } = await ax.post(`/meeting`, req.body);

  return data;
};
