import React from "react";

import { Button } from "components";
import * as S from "./Application.styled";

const Application = () => {
  return (
    <S.Application>
      <S.Title>참가신청 목록</S.Title>
      <S.ApplicationBox>
        <img src="" alt="" />
        <S.UserInfo>
          <S.Name>닉네임 (29세)</S.Name>
          <S.Job>개발자</S.Job>
        </S.UserInfo>
        <S.ButtonWrapper>
          <Button css={S.button} variant="xsWhite">
            거절
          </Button>
          <Button css={S.button} variant="xsPink">
            수락
          </Button>
        </S.ButtonWrapper>
      </S.ApplicationBox>
    </S.Application>
  );
};

export default Application;
