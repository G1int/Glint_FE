import React from "react";

import * as S from "./Profile.styled";
import { GetMeetingResponse } from "types";
import { CircleStartIcon, InfoIcon, MeetingWaitingIcon } from "assets";

interface ProfileProps {
  leaderId?: number;
  peopleCapacity?: number;
  users?: Array<GetMeetingResponse["users"][number]>; //NOTE: 타입 에러로 위와 같이 설정함
}

const Profile = ({ leaderId, peopleCapacity, users }: ProfileProps) => {
  if (!users || !peopleCapacity) return null;

  console.log(users);
  return (
    <S.ProfileWrapper>
      {users.map((user) => (
        <S.Profile key={user.id}>
          <S.Img src={user.profileImage} alt={user.nickname} />
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
      {Array.from({ length: 4 - users.length }, (_, i) => (
        <>
          {i - (peopleCapacity - users.length) ? (
            <S.WaitingBox key={i}>
              <MeetingWaitingIcon />
              <S.WaitingInfoText>
                입장을
                <br />
                기다리는 중이에요
              </S.WaitingInfoText>
            </S.WaitingBox>
          ) : (
            <S.EmptyBox key={i}>
              <InfoIcon />
              <S.WaitingInfoText>
                최대 참여인원이
                <br />
                3명으로 설정된 방이예요
              </S.WaitingInfoText>
            </S.EmptyBox>
          )}
        </>
      ))}
    </S.ProfileWrapper>
  );
};

export default Profile;
