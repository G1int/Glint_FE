import React from "react";

import { CameraIcon, HeartIcon } from "assets";
import * as S from "./Profile.styled";

interface ProfileProps {
  name: string;
  age: string;
  img: string;
  isChangeProfile?: boolean;
  isRoomManager?: boolean;
  keywords?: string[];
  info: { location: string; company: string; job: string };
}

const Profile = ({
  name,
  age,
  img,
  isChangeProfile,
  isRoomManager,
  keywords,
  info,
}: ProfileProps) => {
  return (
    <S.Profile>
      <S.ImgContent>
        <S.Img src={img} />
        {(isChangeProfile || isRoomManager) && (
          <S.IconContent
            isChangeProfile={isChangeProfile}
            isRoomManager={isRoomManager}
          >
            {/* TODO: 임시 아이콘으로 디자인 이후 수정 필요 */}
            {isChangeProfile && <CameraIcon />}
            {isRoomManager && <HeartIcon />}
          </S.IconContent>
        )}
      </S.ImgContent>
      <S.InfoWrapper>
        {keywords?.length && (
          <S.KeywordContent>
            {keywords.map((keyword) => (
              <span>{keyword}</span>
            ))}
          </S.KeywordContent>
        )}
        <S.MainInfoContent>
          <S.Name>{name}</S.Name>
          <span>{age}세</span>
        </S.MainInfoContent>
        <S.InfoContent>
          <span>{info.location}</span>
          <span>{info.company}</span>
          <span>{info.job}</span>
        </S.InfoContent>
      </S.InfoWrapper>
    </S.Profile>
  );
};

export default Profile;
