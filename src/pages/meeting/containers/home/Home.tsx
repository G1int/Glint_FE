import React from "react";

import * as S from "./Home.styled";
import { Badge, Button } from "components";

const Home = () => {
  const memberCounts = "2:2";

  return (
    <S.HomeWrapper>
      <S.ContentWrapper>
        <S.MainContent>
          <Badge css={S.badge} variant="smPink">
            {memberCounts}
          </Badge>
          <span>타이틀</span>
          <span>설명</span>
        </S.MainContent>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>미팅 희망 지역</S.Title>
            <S.Desc>정확한 장소는 함께 정해보세요!</S.Desc>
          </S.TitleWrapper>
        </S.Content>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>여자</S.Title>
          </S.TitleWrapper>
          여자
        </S.Content>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>남자</S.Title>
          </S.TitleWrapper>
          남자
        </S.Content>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button css={S.button} variant="lgPink">
          참가 신청
        </Button>
      </S.ButtonWrapper>
    </S.HomeWrapper>
  );
};

export default Home;
