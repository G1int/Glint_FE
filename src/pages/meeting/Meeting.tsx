import React from "react";

import { BackLayout, Tab } from "components";
import { Application, Chatting, Home } from "./containers";

const Meeting = () => {
  const isOwner = false;

  const tabs = {
    홈: <Home />,
    채팅: <Chatting />,
    신청목록: <Application />,
  };

  return (
    <BackLayout isMeeting isOwner>
      <Tab
        tabList={isOwner ? ["홈", "채팅", "신청목록"] : ["홈", "채팅"]}
        tabs={tabs}
      />
    </BackLayout>
  );
};

export default Meeting;
