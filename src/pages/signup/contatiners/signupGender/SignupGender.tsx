import React from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

import { FormRadioButton } from "components";
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
      <FormRadioButton
        css={S.formRadioButton}
        radioList={[
          { key: "male", label: "남자" },
          { key: "female", label: "여자" },
        ]}
        value={watch("gender") ?? ""}
        register={register("gender")}
      />
    </>
  );
};

export default SignupGender;
