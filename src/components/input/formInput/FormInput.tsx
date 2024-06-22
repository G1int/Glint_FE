import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import * as S from "../Input.styled";

interface FormInputProps {
  //TODO: 기능 정의서 확인 후 type 필수값 수정 필요
  className?: string;
  type: "text";
  value: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  hasError?: boolean;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn<string>;
}

const FormInput = ({
  className,
  type,
  value,
  placeholder,
  maxLength,
  disabled,
  autoComplete,
  hasError,
  handleFocus,
  register,
}: FormInputProps) => {
  return (
    <S.Input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      autoComplete={autoComplete}
      hasError={hasError}
      onFocus={handleFocus}
      {...register}
    />
  );
};

export default FormInput;
