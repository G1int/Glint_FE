import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { userIdSelector } from "atoms";
import { CircleStartIcon, InfoIcon, MeetingWaitingIcon } from "assets";
import type { GetMeetingResponse } from "types";
import * as S from "./Profile.styled";
import { useModal, useToast } from "hooks";
import { useGetUserInfo } from "services";
import { ProfileModal } from "components";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  leaderId?: string;
  peopleCapacity?: number;
  users?: Array<GetMeetingResponse["users"][number]>; //NOTE: 타입 에러로 위와 같이 설정함
}

const Profile = ({ leaderId, peopleCapacity, users }: ProfileProps) => {
  const navigate = useNavigate();
  const [isBlur, setIsBlur] = useState(false);
  const [clickUserId, setClickUserId] = useState<string | null>(null);

  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const { data: profile } = useGetUserInfo(clickUserId!);

  const userId = useRecoilValue(userIdSelector);

  const introduceInfo = {
    introduce: profile?.userProfile?.selfIntroduction ?? null,
    basicInfo: [
      profile?.userProfile?.location?.locationState ?? null,
      profile?.userProfile?.location?.locationCity ?? null,
      `${profile?.userDetail?.height}cm` ?? null,
      profile?.userProfile?.smoking?.smokingName ?? null,
      profile?.userProfile?.religion?.religionName ?? null,
      profile?.userProfile?.drinking?.drinkingName ?? null,
    ],
    keywords: profile?.userProfile?.hashtags ?? [],
  };

  const handleClose = () => {
    handleCloseModal();
    setClickUserId(null);
  };

  const handleClickProfile = () => {
    if (userId && profile) {
      handleOpenModal(
        <ProfileModal
          img={profile.userDetail?.profileImage}
          name={profile.userDetail?.nickname}
          age={profile.userDetail?.age}
          work={profile.userProfile?.work?.workName ?? null}
          university={
            profile.userProfile?.university
              ? `${profile.userProfile.university.universityName ?? ""} ${
                  profile.userProfile.university.universityDepartment ?? ""
                }`
              : null
          }
          clickUserId={profile.userId.toString()}
          introduceInfo={introduceInfo}
          handleCloseClick={handleClose}
        />
      );
    } else {
      addToast({ content: "로그인이 필요한 서비스 입니다." });
      navigate("/");
    }
  };

  useEffect(() => {
    if (clickUserId && profile) {
      handleClickProfile();
    }
  }, [clickUserId, profile]);

  useEffect(() => {
    if (!userId) {
      setIsBlur(true);
    }
  }, [userId]);

  if (!users || !peopleCapacity) return null;

  return (
    <S.ProfileWrapper>
      {users.map((user) => (
        <S.Profile
          key={user.id}
          onClick={() => setClickUserId(user.id.toString())}
        >
          <S.ImgContainer isBlur={isBlur}>
            <S.Img src={user.profileImage} alt={user.nickname} />
          </S.ImgContainer>
          <S.InfoWrapper>
            <S.ProfileMainInfo>
              {leaderId === `${user.id}` && <CircleStartIcon />}
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
