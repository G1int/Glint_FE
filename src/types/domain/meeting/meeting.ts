export interface chatsResponseItem {
  id: number;
  userId: string;
  chatRoomId: number;
  nickname: string;
  message: string;
  sendDate: string;
  userProfileImageUrl: string | null;
}

export interface chatsResponse {
  chats: chatsResponseItem[];
}
