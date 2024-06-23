import React from "react";

import * as S from "./Input.styled";

interface InputProps {
  //TODO: 기능 정의서 확인 후 type 필수값 수정 필요
  className?: string;
  type?: "text";
  value?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  hasError?: boolean;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef(
  (
    {
      className,
      type,
      value,
      placeholder,
      maxLength,
      disabled,
      autoComplete,
      hasError,
      handleFocus,
      handleBlur,
      handleChange,
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement | null>
  ) => {
    return (
      <S.Input
        className={className}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        hasError={hasError}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
