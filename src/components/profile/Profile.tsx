import React from "react";

import * as S from "./Profile.styled";

interface ProfileProps {
  name: string;
  age: string;
  img: string;
  keywords?: string[];
  info: { location: string; company: string; job: string };
}

const Profile = ({ name, age, img, keywords, info }: ProfileProps) => {
  return (
    <S.Profile>
      <S.ImgContent>
        <S.Img src={img} />
        <S.IconContent>icon</S.IconContent>
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
          <span>{age}</span>
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
