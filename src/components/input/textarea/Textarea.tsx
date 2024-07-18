import React from "react";
import * as S from "./Textarea.styled";

interface TextareaProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
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
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
