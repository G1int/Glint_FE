import React from "react";

import * as S from "./Home.styled";
import { Badge } from "components";

const Home = () => {
  const memberCounts = "2:2";

  return (
    <S.HomeWrapper>
      <S.Content>
        <Badge css={S.badge} variant="smPink" label={memberCounts} />
        <div>
          <span>타이틀</span>
          <span>설명</span>
        </div>
      </S.Content>
      <S.Content>미팅 희망 지역</S.Content>
      <S.Content>여자</S.Content>
      <S.Content>남자</S.Content>
    </S.HomeWrapper>
  );
};

export default Home;
