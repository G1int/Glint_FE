import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface VariantProps {
  variant?: "smPink" | "mdPink" | "lgPink" | "mdWhite" | "underline" | "icon";
}

export const Button = styled.button<VariantProps>`
  ${({ theme, variant }) => css`
    ${variant === "smPink"
      ? theme.fonts.subTitle_bold_14
      : variant === "lgPink" || variant === "mdPink" || variant === "mdWhite"
      ? theme.fonts.headline_semibold_18
      : theme.fonts.subTitle_regular_16};
    height: ${variant === "smPink"
      ? "40px"
      : variant === "underline" || variant === "icon"
      ? "fit-content"
      : "56px"};
    border-radius: 8px;
    width: ${variant === "lgPink"
      ? "320px"
      : variant === "mdPink" || variant === "mdWhite"
      ? "140px"
      : variant === "smPink"
      ? "59px"
      : "fit-content"};
    color: ${variant === "underline" ? theme.colors.black : theme.colors.white};
    background-color: ${variant === "smPink" ||
    variant === "mdPink" ||
    variant === "lgPink"
      ? theme.colors.pink900
      : theme.colors.white};
    text-decoration: ${variant === "underline" && "underline"};

    &:disabled {
      color: ${theme.colors.gray700};
      background-color: ${theme.colors.gray400};
    }

    &:not(:disabled):hover {
      background-color: ${(variant === "smPink" ||
        variant == "mdPink" ||
        variant === "lgPink") &&
      theme.colors.pink700};
      color: ${variant === "underline" && theme.colors.navy900};
    }
  `}
`;
