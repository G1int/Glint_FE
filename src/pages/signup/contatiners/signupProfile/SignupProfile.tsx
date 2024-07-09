import React from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

import type { SignupForm } from "types";
import * as S from "../../Signup.styled";
import { HeartIcon } from "assets";
import { Button } from "components";

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
  return (
    <>
      <S.Title hasDesc>
        <strong>프로필 사진</strong>을<br />
        등록해주세요.
      </S.Title>
      <S.Desc>자신을 잘 나타내는 사진일수록 매력 UP!</S.Desc>
      <Button variant="icon">
        <HeartIcon onClick={() => console.log("icon")} />
      </Button>
    </>
  );
};

export default SignupProfile;
