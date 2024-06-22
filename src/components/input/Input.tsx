import React from "react";

import * as S from "./Input.styled";

interface InputProps {
  //TODO: 기능 정의서 확인 후 type 필수값 수정 필요
  className?: string;
  type: "text";
  value: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  type,
  value,
  placeholder,
  maxLength,
  disabled,
  autoComplete,
  handleBlur,
  handleChange,
}: InputProps) => {
  return (
    <>
      <S.Input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default Input;
