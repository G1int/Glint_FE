import React from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

import { FormRadioButton } from "components";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";
import { GENDER_RADIOS } from "assets";

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
      <FormRadioButton
        css={S.formRadioButton}
        isChecked
        radioList={GENDER_RADIOS}
        value={watch("gender") ?? ""}
        register={register("gender")}
      />
    </>
  );
};

export default SignupGender;
