import { Client, IMessage } from "@stomp/stompjs";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import * as S from "./Chatting.styled";
import { Button, Input } from "components";

interface ChatMessageReqeust {
  text: string;
  roomId: number;
}
interface ChatMessageResponse {
  id: number;
  content: string;
  writer: string;
}

const Chatting = () => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const roomId = 1;
  const day = dayjs();

  const sendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatMessageReqeust = {
        message: newMessage,
        userId: 1,
        chatroomId: 1,
        sendDate: day.format("YYYY-MM-DD HH:mm:ss"),
      };
      console.log(chatMessage, "1");

      stompClient.publish({
        destination: `/pub/chatrooms/1`,
        body: JSON.stringify(chatMessage),
      });
      setNewMessage("");
    }
  };
  console.log(messages);

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const response = await axios.get(
          `http://3.27.84.199:8080/glint/chatrooms/1/chats`
        );
        const messages = response.data.chats as ChatMessageResponse[];
        setMessages(messages);
        console.log(messages);
      } catch (error) {
        console.error("채팅 내역 로드 실패", error);
      }
    };

    loadChatHistory();

    const client = new Client({
      brokerURL: "https://api.g1int.com/glint/ws", // 서버 WebSocket URL
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/sub/chatrooms/${roomId}`, (message: IMessage) => {
          const msg: ChatMessageResponse = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, msg]);
        });
      },
    });
    client.activate();
    setStompClient(client);
    return () => {
      client.deactivate();
    };
  }, [roomId]);

  console.log(messages, "messages");

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
        <div>
          {messages.map((msg, idx) => (
            <div key={idx}>
              {msg.writer}: {msg.content}
            </div>
          ))}
        </div>
        <S.ChatMessageBox isMe={false}>
          <S.Name>이름</S.Name>
          <S.ChatContent isMe={false}>내용</S.ChatContent>
        </S.ChatMessageBox>
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
