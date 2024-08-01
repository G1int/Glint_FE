import type { postCreateRoomQuery, putEditRoomQuery } from "types";
import { ax } from "./axios";

export const postCreateRoomAPI = async (req: postCreateRoomQuery) => {
  const { data } = await ax.post(`/meeting`, req.body);

  return data;
};

export const putEditRoomAPI = async (req: putEditRoomQuery) => {
  const { data } = await ax.put(`/meetings/${req.meetingId}`, req.body);

  return data;
};
