import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import * as S from "./Textarea.styled";

interface TextareaProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  register?: UseFormRegisterReturn<string>;
}

const Textarea = React.forwardRef(
  (
    {
      className,
      placeholder,
      maxLength,
      disabled,
      handleChange,
      handleFocus,
      handleBlur,
      register,
    }: TextareaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement | null>
  ) => {
    return (
      <S.Textarea
        className={className}
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
