import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Badge = styled.button<{
  isSelected?: boolean;
  isClickable: boolean;
  variant?: "smPink" | "smNavy" | "mdNavy" | "mdWhite";
}>`
  ${({ isSelected, isClickable, theme, variant }) => css`
    ${variant === "smPink" || variant === "smNavy"
      ? theme.fonts.caption_regular_10
      : isSelected || variant === "mdNavy"
      ? theme.fonts.caption_bold_12
      : theme.fonts.caption_regular_12};
    height: ${variant === "smPink" || variant === "smNavy" ? "18px" : "38px"};
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid
      ${variant === "smPink"
        ? theme.colors.pink900
        : (isSelected && isClickable) ||
          variant === "smNavy" ||
          variant === "mdNavy"
        ? theme.colors.navy900
        : theme.colors.gray600};
    border-radius: ${variant === "smPink" || variant === "smNavy"
      ? "4px"
      : "20px"};
    padding: ${variant === "smPink" || variant === "smNavy"
      ? "3px 6px"
      : "9px 16px"};
    background-color: ${variant === "smPink"
      ? theme.colors.pink900
      : isSelected || variant === "smNavy" || variant === "mdNavy"
      ? theme.colors.navy900
      : theme.colors.white};
    color: ${(isSelected || !isClickable) && theme.colors.white};
    cursor: ${!isClickable && "default"};

    &:hover {
      background-color: ${isClickable && theme.colors.navy900};
      color: ${isClickable && theme.colors.white};
      border: ${isClickable && `1px solid ${theme.colors.navy900}`};
    }
  `}
`;
