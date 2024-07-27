import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "components";
import { useGetMeetingJoins } from "services";
import { MoreIcon, StickerIcon } from "assets";
import type { getMeetingJoinsResponse } from "types";
import * as S from "./Join.styled";

const Join = () => {
  const { meetingId } = useParams();
  const [lastJoinMeetingId, setLastJoinMeetingId] = useState<number | null>(
    null
  );
  const [userJoinMeetings, setUserJoinMeetings] = useState<
    getMeetingJoinsResponse["userJoinMeetings"] | []
  >([]);

  const req = { meetingId: meetingId! };
  const queryReq = { ...req, query: { lastJoinMeetingId: lastJoinMeetingId } };

  const { data, refetch } = useGetMeetingJoins(
    !lastJoinMeetingId ? req : queryReq
  );

  const handleRefetchMoreJoin = () => {
    if (!data) return;

    const lastJoinMeetingId =
      data?.userJoinMeetings[data.userJoinMeetings.length - 1].joinMeetingId;

    setLastJoinMeetingId(lastJoinMeetingId);

    refetch();
  };

  useEffect(() => {
    if (!data) return;

    setUserJoinMeetings(data?.userJoinMeetings);
  }, [data]);

  return (
    <>
      {userJoinMeetings.length ? (
        <S.Join>
          <S.Title>참가신청 목록</S.Title>
          {userJoinMeetings.map((user) => (
            <S.JoinBox key={user.userId}>
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
            </S.JoinBox>
          ))}
          {data?.userJoinMeetings.length === 3 && (
            // TODO: 해당 신청목록이 마지막 리스트인지 알 수 없음 api 확인 필요
            <S.MoreButton onClick={handleRefetchMoreJoin}>
              더보기
              <MoreIcon />
            </S.MoreButton>
          )}
        </S.Join>
      ) : (
        <S.EmptyUserJoinMeetingWrapper>
          <S.StickerBox>
            <StickerIcon />
          </S.StickerBox>
          <S.EmptyUserText>
            미팅 참가
            <br />
            신청 목록이 없어요.
          </S.EmptyUserText>
        </S.EmptyUserJoinMeetingWrapper>
      )}
    </>
  );
};

export default Join;
