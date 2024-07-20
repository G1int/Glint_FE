import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { CompatClient, IMessage, Stomp } from "@stomp/stompjs";

import { Button, Input } from "components";
import { useGetChats } from "services";
import { formatDateTime } from "utils";
import { SOCKET_URL } from "config";
import type { chatsResponseItem } from "types";
import * as S from "./Chatting.styled";

const Chatting = () => {
  const [chatMessageList, setChatMessageList] = useState<chatsResponseItem[]>(
    []
  );
  const [newMessage, setNewMessage] = useState<string>("");

  const client = useRef<CompatClient>();
  const listRef = useRef<HTMLDivElement>(null);

  const roomId = 1; //TODO: 임시 추가 방코드
  const myId = sessionStorage.getItem("id");

  const { data } = useGetChats(`${roomId}`);

  const scrollToListBottom = () => {
    if (window.innerWidth <= 375) {
      return;
    }
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const isMyChat = (userId: string) => {
    return +userId === +myId!;
  };

  const connectHandler = () => {
    if (client.current && client.current.connected) {
      return;
    }

    const socket = new WebSocket(SOCKET_URL);
    client.current = Stomp.over(socket);

    client.current.connect(
      {},
      () => {
        client.current?.subscribe(
          `/sub/chatrooms/${roomId}`,
          (message: IMessage) => {
            const receivedMessage = JSON.parse(message.body);
            setChatMessageList((prevList) => [...prevList, receivedMessage]);
          }
        );
      },
      //TODO: 타입 수정 예정
      (error: any) => {
        console.error("WebSocket connection error:", error);
        setTimeout(connectHandler, 5000); // 5초 후에 다시 연결 시도
      }
    );
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    client.current!.send(
      `/pub/chatrooms/${roomId}`,
      {},
      JSON.stringify({
        userId: myId,
        message: newMessage,
        chatroomId: roomId,
        sendDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      })
    );

    setNewMessage("");
  };

  useEffect(() => {
    if (!data) return;

    setChatMessageList(data.chats.reverse());
    connectHandler();
  }, [roomId, data]);

  useEffect(() => {
    scrollToListBottom();
  }, [chatMessageList]);

  return (
    <S.Chatting>
      <S.ChatBox>
        <S.ChatInfo>
          대화는 모든 인원이 모이면 시작해주세요.
          <br />
          간단한 인사를 나눈 후에 시간과 장소를 정해보세요.
          <br />
          깊은 대화는 직접 만나서 나누길 추천드려요.
        </S.ChatInfo>
        <S.ChatList>
          {chatMessageList?.map((msg, idx) => (
            <S.ChatMessageBox
              key={idx}
              ref={listRef}
              isMe={isMyChat(msg.userId)}
            >
              {!isMyChat(msg.userId) && (
                <S.Img src={msg.userProfileImageUrl ?? ""} />
              )}
              <S.ChatInfoBox isMe={isMyChat(msg.userId)}>
                {!isMyChat(msg.userId) && <S.Name>{msg.nickname}</S.Name>}
                <S.ChatContent isMe={isMyChat(msg.userId)}>
                  {msg.message}
                </S.ChatContent>
                <S.Date isMe={isMyChat(msg.userId)}>
                  {formatDateTime(msg.sendDate)}
                </S.Date>
              </S.ChatInfoBox>
            </S.ChatMessageBox>
          ))}
        </S.ChatList>
      </S.ChatBox>
      <S.InputWrapper>
        <Input
          css={S.input}
          type="text"
          value={newMessage}
          placeholder="메세지를 입력해주세요."
          handleChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="smPink" onClick={sendMessage}>
          전송
        </Button>
      </S.InputWrapper>
    </S.Chatting>
  );
};

export default Chatting;
