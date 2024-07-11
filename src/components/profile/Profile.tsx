import React from "react";

import { ProfileCameraIcon } from "assets";
import * as S from "./Profile.styled";

interface ProfileProps {
  className?: string;
  name: string;
  age: string;
  img: string;
  info: { location: string; company: string; job: string };
  handleChangeProfile?: () => void;
}

const Profile = ({
  className,
  name,
  age,
  img,
  info,
  handleChangeProfile,
}: ProfileProps) => {
  return (
    <S.Profile className={className}>
      <S.ImgContent>
        <S.Img src={img} />
        <S.IconContent onClick={handleChangeProfile}>
          <ProfileCameraIcon />
        </S.IconContent>
      </S.ImgContent>
      <S.InfoWrapper>
        <S.MainInfoContent>
          <S.Name>{name}</S.Name>
          <S.Name>({age}세)</S.Name>
        </S.MainInfoContent>
        <S.InfoContent>
          <span>{info.location}</span>
          <span>{info.company}</span>
          {/* <span>{info.job}</span> */}
        </S.InfoContent>
      </S.InfoWrapper>
    </S.Profile>
  );
};

export default Profile;
