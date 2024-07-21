import { useQuery } from "@tanstack/react-query";

import { getChatsAPI } from "apis";
import type { chatsResponse } from "types";

export const useGetChats = (roomId: string) => {
  return useQuery<chatsResponse>({
    queryKey: ["chats", roomId],
    queryFn: () => getChatsAPI(roomId),
  });
};
