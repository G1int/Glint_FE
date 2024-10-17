import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { buttonVariant } from "types";

export const Button = styled.button<{ variant?: buttonVariant }>`
  ${({ theme, variant }) => css`
    ${variant === "smPink"
      ? theme.fonts.subTitle_bold_14
      : variant === "lgPink" || variant === "mdPink" || variant === "mdWhite"
      ? theme.fonts.headline_semibold_18
      : variant === "xsPink" || variant === "xsWhite"
      ? theme.fonts.caption_semibold_12
      : theme.fonts.subTitle_regular_16};
    height: ${variant === "smPink"
      ? "40px"
      : variant === "underline" || variant === "icon"
      ? "fit-content"
      : variant === "xsPink" || variant === "xsWhite"
      ? "34px"
      : "56px"};
    border-radius: 8px;
    border: ${(variant === "mdWhite" || variant === "xsWhite") &&
    `1px solid ${theme.colors.gray600}`};
    width: ${variant === "lgPink"
      ? "320px"
      : variant === "mdPink" || variant === "mdWhite"
      ? "140px"
      : variant === "smPink"
      ? "59px"
      : "fit-content"};
    color: ${variant === "underline" ||
    variant === "mdWhite" ||
    variant === "xsWhite"
      ? theme.colors.black
      : theme.colors.white};
    background-color: ${variant === "xsPink" ||
    variant === "smPink" ||
    variant === "mdPink" ||
    variant === "lgPink"
      ? theme.colors.pink900
      : theme.colors.white};
    text-decoration: ${variant === "underline" && "underline"};

    &:disabled {
      color: ${theme.colors.gray700};
      background-color: ${variant !== "icon" && theme.colors.gray400};
    }

    &:not(:disabled):hover {
      background-color: ${(variant === "xsPink" ||
        variant === "smPink" ||
        variant == "mdPink" ||
        variant === "lgPink") &&
      theme.colors.pink700};
      color: ${variant === "underline" && theme.colors.navy900};
    }
  `}
`;
