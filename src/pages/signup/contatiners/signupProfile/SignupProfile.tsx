import React, { useRef, useState } from "react";
import type { UseFormSetValue } from "react-hook-form";

import { Button } from "components";
import { CameraIcon, UserIcon } from "assets";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";

interface SignupProfileProps {
  setValue: UseFormSetValue<SignupForm>;
}

const SignupProfile = ({ setValue }: SignupProfileProps) => {
  const [image, setImage] = useState("");
  const imgRef = useRef<HTMLInputElement | null>(null);

  //TODO: 압축 확인 필요
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (!file) return;
    setValue("profile", file);

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleClick = (): void => {
    if (!imgRef.current) return;

    imgRef.current?.click();
  };

  return (
    <>
      <S.Title hasDesc>
        <strong>프로필 사진</strong>을<br />
        등록해주세요.
      </S.Title>
      <S.Desc>자신을 잘 나타내는 사진일수록 매력 UP!</S.Desc>
      <S.ProfileContent>
        <S.ProfileImg>
          {image ? <S.Img src={image ?? ""} /> : <UserIcon css={S.userIcon} />}
          {/* TODO: 버튼 컴포넌트와 별개로 이미지 업로드 용 input 컴포넌트 제작 필요 */}
          <S.FileUploadInput
            ref={imgRef}
            type="file"
            accept="image/*"
            onChange={onChangeImage}
          />
          <Button variant="icon" onClick={handleClick}>
            <CameraIcon />
          </Button>
        </S.ProfileImg>
      </S.ProfileContent>
    </>
  );
};

export default SignupProfile;
