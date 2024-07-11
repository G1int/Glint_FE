import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface VariantProps {
  variant?: "smPink" | "lgPink" | "mdWhite" | "lgWhite" | "underline" | "icon";
}

export const Button = styled.button<VariantProps>`
  ${({ theme, variant }) => css`
    height: ${variant === "smPink"
      ? "40px"
      : variant === "underline" || variant === "icon"
      ? "fit-content"
      : "56px"};
    font-size: ${variant === "smPink"
      ? "1.4rem"
      : variant === "lgPink" || variant === "lgWhite"
      ? "1.8rem"
      : "1.6rem"};
    border-radius: 8px;
    width: ${variant === "lgPink" || variant === "lgWhite"
      ? "320px"
      : variant === "mdWhite"
      ? "140px"
      : variant === "smPink"
      ? "59px"
      : "fit-content"};
    color: ${variant === "underline" ? theme.colors.black : theme.colors.white};
    background-color: ${variant === "smPink" || variant === "lgPink"
      ? theme.colors.pink900
      : theme.colors.white};
    text-decoration: ${variant === "underline" && "underline"};

    &:disabled {
      color: ${theme.colors.gray500};
      background-color: ${theme.colors.gray100};
    }

    &:not(:disabled):hover {
      background-color: ${(variant === "smPink" || variant === "lgPink") &&
      theme.colors.pink700};
      color: ${variant === "underline" && theme.colors.navy900};
    }
  `}
`;
