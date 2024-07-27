import React, { useEffect, useState } from "react";

import * as S from "./Profile.styled";
import { GetMeetingResponse } from "types";
import { CircleStartIcon, InfoIcon, MeetingWaitingIcon } from "assets";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";

interface ProfileProps {
  leaderId?: number;
  peopleCapacity?: number;
  users?: Array<GetMeetingResponse["users"][number]>; //NOTE: 타입 에러로 위와 같이 설정함
}

const Profile = ({ leaderId, peopleCapacity, users }: ProfileProps) => {
  const [isBlur, setIsBlur] = useState(false);

  const userId = useRecoilValue(userIdSelector);

  useEffect(() => {
    if (!userId) {
      setIsBlur(true);
    }
  }, [userId]);

  if (!users || !peopleCapacity) return null;

  return (
    <S.ProfileWrapper>
      {users.map((user) => (
        <S.Profile key={user.id}>
          <S.ImgContainer isBlur={isBlur}>
            <S.Img src={user.profileImage} alt={user.nickname} />
          </S.ImgContainer>
          <S.InfoWrapper>
            <S.ProfileMainInfo>
              {leaderId === user.id && <CircleStartIcon />}
              <S.Name>{user.nickname}</S.Name>
              <S.Age>{user.age}세</S.Age>
            </S.ProfileMainInfo>

            <span>{user.affiliation ?? "-"}</span>
          </S.InfoWrapper>
        </S.Profile>
      ))}
      {Array.from({ length: 4 - users.length }, (_, i) => {
        const isLast = i === 4 - users.length - 1;

        return (
          <React.Fragment key={i}>
            {!isLast ? (
              <S.WaitingBox>
                <MeetingWaitingIcon />
                <S.WaitingInfoText>
                  입장을
                  <br />
                  기다리는 중이에요
                </S.WaitingInfoText>
              </S.WaitingBox>
            ) : (
              <S.EmptyBox>
                <InfoIcon />
                <S.WaitingInfoText>
                  최대 참여인원이
                  <br />
                  3명으로 설정된 방이예요
                </S.WaitingInfoText>
              </S.EmptyBox>
            )}
          </React.Fragment>
        );
      })}
    </S.ProfileWrapper>
  );
};

export default Profile;
