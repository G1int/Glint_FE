import React from "react";

import { BackLayout, Button, Tab } from "components";
import { Application, Chatting, Home } from "./containers";
import * as S from "./Meeting.styled";

const Meeting = () => {
  const isOwner = false;

  const tabs = {
    홈: <Home />,
    채팅: <Chatting />,
    신청목록: <Application />,
  };

  return (
    <BackLayout css={S.backLayout} isMeeting isOwner hasTopContent>
      <Tab
        tabList={isOwner ? ["홈", "채팅", "신청목록"] : ["홈", "채팅"]}
        tabs={tabs}
      />
      <S.ButtonWrapper>
        <Button css={S.button} variant="lgPink">
          참가 신청
        </Button>
      </S.ButtonWrapper>
    </BackLayout>
  );
};

export default Meeting;
