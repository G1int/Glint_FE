import React from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

import { FormInput } from "components";
import { CircleCloseIcon } from "assets";
import type { SignupForm } from "types";
import * as S from "../../Signup.styled";

interface SignupNicknameProps {
  watch: UseFormWatch<SignupForm>;
  errors: FieldErrors<SignupForm>;
  setValue: UseFormSetValue<SignupForm>;
  register: UseFormRegister<SignupForm>;
  trigger: UseFormTrigger<SignupForm>;
}

const SignupNickname = ({
  watch,
  errors,
  setValue,
  register,
  trigger,
}: SignupNicknameProps) => {
  const onCancelInput = () => {
    setValue("nickname", "");
  };

  return (
    <>
      <S.Title>
        프로필에 표시될
        <br />
        <strong>닉네임</strong>을 입력해주세요.
      </S.Title>
      <S.FormInputWrapper>
        <FormInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={watch("nickname")}
          hasError={!!errors.nickname?.message}
          message={errors.nickname?.message}
          maxLength={15}
          register={register("nickname", {
            required: true,
            validate: (value: string) =>
              (value.length >= 3 && value.length <= 15) ||
              "닉네임은 3~15글자로 설정해주세요",
            onChange: async () => {
              await trigger("nickname");
            },
          })}
        />
        {watch("nickname") && (
          <CircleCloseIcon css={S.closeIcon} onClick={onCancelInput} />
        )}
      </S.FormInputWrapper>
    </>
  );
};

export default SignupNickname;
