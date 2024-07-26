import React from "react";
import { useParams } from "react-router-dom";

import { Button } from "components";
import { useGetMeetingJoins } from "services";
import * as S from "./Application.styled";

const Application = () => {
  const { meetingId } = useParams();

  const req = {
    meetingId: meetingId!,
  };

  const { data } = useGetMeetingJoins(req);

  return (
    <S.Application>
      <S.Title>참가신청 목록</S.Title>
      {data?.userJoinMeetings.length ? (
        data.userJoinMeetings.map((user) => (
          <S.ApplicationBox key={user.userId}>
            <S.Img src={user.profileImage} alt={user.nickname} />
            <S.UserInfo>
              <S.Name>
                {user.nickname} ({user.age}세)
              </S.Name>
              <S.Job>{user.affiliation || "-"}</S.Job>
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
        ))
      ) : (
        <>리스트 없음</>
      )}
    </S.Application>
  );
};

export default Application;
