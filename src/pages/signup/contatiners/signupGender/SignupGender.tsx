import React from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

import { CheckIcon } from "assets";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";

interface SignupGenderProps {
  watch: UseFormWatch<SignupForm>;
  register: UseFormRegister<SignupForm>;
}

const SignupGender = ({ watch, register }: SignupGenderProps) => {
  return (
    <>
      <S.Title>
        <strong>성별</strong>을<br />
        알려주세요.
      </S.Title>
      <S.FormRadioButtonWrapper>
        <S.FormRadioButton isSelected={watch("gender") === "male"}>
          <input type="radio" value="male" {...register("gender")} />
          남자
          <CheckIcon css={S.checkIcon(watch("gender") === "male")} />
        </S.FormRadioButton>
        <S.FormRadioButton isSelected={watch("gender") === "female"}>
          <input type="radio" value="female" {...register("gender")} />
          여자
          <CheckIcon css={S.checkIcon(watch("gender") === "female")} />
        </S.FormRadioButton>
      </S.FormRadioButtonWrapper>
    </>
  );
};

export default SignupGender;
