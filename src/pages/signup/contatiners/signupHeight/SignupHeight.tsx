import React from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

import { FormInput } from "components";
import { onlyNumber } from "utils";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";

interface SignupHeightProps {
  watch: UseFormWatch<SignupForm>;
  errors: FieldErrors<SignupForm>;
  register: UseFormRegister<SignupForm>;
  trigger: UseFormTrigger<SignupForm>;
}

const SignupHeight = ({
  watch,
  errors,
  register,
  trigger,
}: SignupHeightProps) => {
  return (
    <>
      <S.Title>
        <strong>키</strong>를<br />
        입력해주세요.
      </S.Title>
      <S.FormInputWrapper>
        <FormInput
          label="키"
          placeholder="키를 입력해주세요"
          value={`${watch("height")}`}
          hasError={!!errors.height?.message}
          message={errors.height?.message}
          maxLength={3}
          register={register("height", {
            required: true,
            setValueAs: onlyNumber,
            validate: (value: number) =>
              (value >= 100 && value <= 250) || "올바른 키를 입력해주세요",
            onChange: async () => {
              await trigger("height");
            },
          })}
        />
        {watch("height") && <S.Unit>CM</S.Unit>}
      </S.FormInputWrapper>
    </>
  );
};

export default SignupHeight;
