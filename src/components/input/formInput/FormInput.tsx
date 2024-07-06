import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import * as S from "../Input.styled";

interface FormInputProps {
  //TODO: 기능 정의서 확인 후 type 필수값 수정 필요
  className?: string;
  type?: "text";
  label?: string;
  value?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  hasError?: boolean;
  message?: string;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn<string>;
}

const FormInput = ({
  className,
  type,
  label,
  value,
  min,
  max,
  placeholder,
  maxLength,
  disabled,
  autoComplete,
  hasError,
  message,
  handleFocus,
  register,
}: FormInputProps) => {
  return (
    <S.InputWrapper>
      {label && <S.Label hasError={hasError}>{label}</S.Label>}
      <S.Input
        className={className}
        type={type}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        hasError={hasError}
        onFocus={handleFocus}
        {...register}
      />
      {message && <S.Message hasError={hasError}>{message}</S.Message>}
    </S.InputWrapper>
  );
};

export default FormInput;
