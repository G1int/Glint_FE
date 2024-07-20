import type { chatsResponse } from "types";
import { ax } from "./axios";

export const getChatsAPI = async (roomId: string) => {
  const { data } = await ax.get<chatsResponse>(`chatrooms/${roomId}/chats`);

  return data;
};
