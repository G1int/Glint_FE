import React, { useEffect, useState } from "react";

import { ProfileCameraIcon } from "assets";
import * as S from "./Profile.styled";
import { usePutProfileImage } from "services";
import { useToast, useUserInfo } from "hooks";
import { userIdSelector } from "atoms";
import { useRecoilValue } from "recoil";

interface ProfileProps {
  className?: string;
  name: string | null;
  age: string | null;
  img: string | null;
  info?: {
    location?: string;
    work?: string;
    university?: string;
  };
}

const Profile = ({ className, name, age, img, info }: ProfileProps) => {
  const { addToast } = useToast();
  const { fetchUserInfo } = useUserInfo();
  const userId = useRecoilValue(userIdSelector);
  const { mutate: mutateImage } = usePutProfileImage(userId!);
  const [profileImg, setProfileImg] = useState(img ?? "");
  const fileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (img) {
      setProfileImg(img);
    }
  }, [img]);

  const handleInputClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const req = { imageFile: e.target.files[0] };

      mutateImage(req, {
        onSuccess: async (res) => {
          setProfileImg(res.profileImage);
          await fetchUserInfo();
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
            <span>{info.location ?? ""}</span>
            <span>
              {info.work ? info.work : info.university ? info.university : ""}
            </span>
          </S.InfoContent>
        )}
      </S.InfoWrapper>
    </S.Profile>
  );
};

export default Profile;
