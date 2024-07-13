import React, { useRef } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

import { Button } from "components";
import { CameraIcon, UserIcon } from "assets";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";

interface SignupProfileProps {
  watch: UseFormWatch<SignupForm>;
  errors: FieldErrors<SignupForm>;
  setValue: UseFormSetValue<SignupForm>;
  register: UseFormRegister<SignupForm>;
  trigger: UseFormTrigger<SignupForm>;
}

const SignupProfile = ({
  watch,
  errors,
  setValue,
  register,
  trigger,
}: SignupProfileProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setValue("profile", imageUrl);
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
          {watch("profile") ? (
            <S.Img src={watch("profile") ?? ""} />
          ) : (
            <UserIcon css={S.userIcon} />
          )}
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
