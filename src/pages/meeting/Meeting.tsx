import React from "react";

import { BackLayout, Tab } from "components";
import { Application, Chatting, Home } from "./containers";
import * as S from "./Meeting.styled";

const Meeting = () => {
  const isOwner = false;

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
