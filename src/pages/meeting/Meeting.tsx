import React from "react";
import { useParams } from "react-router-dom";

import { BackLayout, Tab } from "components";
import { useGetMeeting } from "services";
import { Join, Chatting, Home } from "./containers";
import * as S from "./Meeting.styled";

const Meeting = () => {
  const { meetingId } = useParams();
  const userId = sessionStorage.getItem("id")!;

  const { data } = useGetMeeting(meetingId!);

  const isOwner = `${data?.leaderUserId}` === userId;

  console.log(isOwner, data?.leaderUserId, userId);

  const tabs = [
    { label: "홈", query: "home", component: <Home data={data} /> },
    {
      label: "채팅",
      query: "chatting",
      component: <Chatting meetingId={`${data?.id}`} />,
    },
    { label: "신청목록", query: "join", component: <Join /> },
  ];

  return (
    <BackLayout isMeeting isOwner hasTopContent>
      <Tab
        css={S.tab}
        tabList={isOwner ? ["홈", "채팅", "신청목록"] : ["홈", "채팅"]}
        tabs={tabs}
      />
    </BackLayout>
  );
};

export default Meeting;
