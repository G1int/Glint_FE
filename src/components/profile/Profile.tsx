import React, { useState } from "react";

import { ProfileCameraIcon } from "assets";
import * as S from "./Profile.styled";
import { usePostImage } from "services";
import { useToast } from "hooks";

interface ProfileProps {
  className?: string;
  name: string;
  age: string;
  img: string;
  info?: { location: string; company: string; job: string };
}

const Profile = ({ className, name, age, img, info }: ProfileProps) => {
  const { mutate: mutateImage } = usePostImage();
  const { addToast } = useToast();
  const [profileImg, setProfileImg] = useState<string>(img);
  const fileInput = React.useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const req = { imageFile: e.target.files[0] };

      mutateImage(req, {
        onSuccess: (res) => {
          setProfileImg(res.url);
        },
        onError: () => {
          addToast({
            content: "이미지 등록에 문제가 생겼습니다. 다시 시도해주세요.",
          });
        },
      });
    }
  };

  return (
    <S.Profile className={className}>
      <S.ImgContent>
        <S.Img src={profileImg} />
        <S.IconContent onClick={handleInputClick}>
          <S.InputFile
            type="file"
            ref={fileInput}
            onChange={handleUploadImage}
          />
          <ProfileCameraIcon />
        </S.IconContent>
      </S.ImgContent>
      <S.InfoWrapper>
        <S.MainInfoContent>
          <S.Name>{name}</S.Name>
          <S.Name>({age}세)</S.Name>
        </S.MainInfoContent>
        {info && (
          <S.InfoContent>
            <span>{info.location}</span>
            <span>{info.company}</span>
          </S.InfoContent>
        )}
      </S.InfoWrapper>
    </S.Profile>
  );
};

export default Profile;
