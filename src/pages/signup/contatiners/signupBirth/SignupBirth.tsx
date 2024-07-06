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

interface SignupBirthProps {
  watch: UseFormWatch<SignupForm>;
  errors: FieldErrors<SignupForm>;
  register: UseFormRegister<SignupForm>;
  trigger: UseFormTrigger<SignupForm>;
}

const SignupBirth = ({
  watch,
  errors,
  register,
  trigger,
}: SignupBirthProps) => {
  const today = new Date();
  const BirthErrorMessage =
    errors.birth?.year?.message ||
    errors.birth?.month?.message ||
    errors.birth?.date?.message;

  return (
    <>
      <S.Title hasDesc>
        <strong>생년월일</strong>을<br />
        입력해주세요.
      </S.Title>
      <S.Desc>프로필에는 만나이로 보여요.</S.Desc>
      <S.FormInputWrapper>
        <S.Label hasError={!!errors.birth?.message}>생년월일</S.Label>
        <S.BirthWrapper>
          <S.FormContext>
            <FormInput
              placeholder="YYYY"
              value={`${watch("birth.year") || ""}`}
              hasError={!!errors.birth?.year?.message}
              maxLength={4}
              register={register("birth.year", {
                required: true,
                setValueAs: onlyNumber,
                validate: (value: number) =>
                  (value >= 1950 && value <= today.getFullYear()) ||
                  "올바른 생년월일을 입력해주세요.",
                onChange: async () => {
                  await trigger("birth.year");
                },
              })}
            />
            {watch("birth.year") && <S.FormYearText>년</S.FormYearText>}
          </S.FormContext>
          <S.FormContext>
            <FormInput
              placeholder="MM"
              value={`${watch("birth.month") || ""}`}
              min={1}
              max={12}
              hasError={!!errors.birth?.month?.message}
              maxLength={2}
              register={register("birth.month", {
                required: true,
                setValueAs: onlyNumber,
                validate: (value: number) =>
                  (value >= 1 && value <= 12) ||
                  "올바른 생년월일을 입력해주세요.",
                onChange: async () => {
                  await trigger("birth.month");
                },
              })}
            />
            {watch("birth.month") && (
              <S.FormMonthDateText>월</S.FormMonthDateText>
            )}
          </S.FormContext>
          <S.FormContext>
            <FormInput
              placeholder="DD"
              value={`${watch("birth.date") || ""}`}
              min={1}
              max={31}
              hasError={!!errors.birth?.date?.message}
              maxLength={2}
              register={register("birth.date", {
                required: true,
                setValueAs: onlyNumber,
                validate: (value: number) =>
                  (value >= 1 && value <= 31) ||
                  "올바른 생년월일을 입력해주세요.",
                onChange: async () => {
                  await trigger("birth.date");
                },
              })}
            />
            {watch("birth.date") && (
              <S.FormMonthDateText>일</S.FormMonthDateText>
            )}
          </S.FormContext>
        </S.BirthWrapper>
        {BirthErrorMessage && (
          <S.Message hasError={!!BirthErrorMessage}>
            올바른 생년월일을 입력해주세요.
          </S.Message>
        )}
      </S.FormInputWrapper>
    </>
  );
};

export default SignupBirth;
