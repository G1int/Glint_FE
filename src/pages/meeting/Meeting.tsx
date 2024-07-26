import React from "react";
import { useParams } from "react-router-dom";

import { BackLayout, Tab } from "components";
import { useGetMeeting } from "services";
import * as S from "./Meeting.styled";
import { Application, Chatting, Home } from "./containers";

const Meeting = () => {
  const { meetingId } = useParams();
  const userId = sessionStorage.getItem("id")!;
  const { data } = useGetMeeting(meetingId!);

  const isOwner = `${data?.leaderUserId}` === userId;

  const tabs = [
    { label: "홈", query: "home", component: <Home /> },
    { label: "채팅", query: "chatting", component: <Chatting /> },
    { label: "신청목록", query: "application", component: <Application /> },
  ];

  return (
    <BackLayout css={S.backLayout} isMeeting isOwner hasTopContent>
      <Tab
        tabList={isOwner ? ["홈", "채팅", "신청목록"] : ["홈", "채팅"]}
        tabs={tabs}
      />
    </BackLayout>
  );
};

export default Meeting;
