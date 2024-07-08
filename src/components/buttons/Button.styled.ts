import { css } from "@emotion/react";
import styled from "@emotion/styled";

const smSizeArr = ["smGray", "smWhite", "smPink"];
const mdSizeArr = ["mdGray", "mdWhite", "mdPink"];
const lgSizeArr = ["lgGray", "lgWhite", "lgPink"];
const grayArr = ["smGray", "mdGray", "lgGray"];
// const whiteArr = ["smWhite", "mdWhite", "lgWhite"];
const pinkArr = ["smPink", "mdPink", "lgPink"];

export const Button = styled.button<{ variant?: string }>`
  ${({ theme, variant }) => css`
    height: ${variant !== "underline" && variant !== "icon"
      ? "56px"
      : "fit-content"};
    font-size: ${variant === "underline" ? "1.6rem" : "1.8rem"};
    border-radius: 8px;
    // TODO: md, sm 버튼 사이즈 나오면 수정
    width: ${variant &&
    (lgSizeArr.includes(variant)
      ? "320px"
      : mdSizeArr.includes(variant)
      ? "160px"
      : smSizeArr.includes(variant)
      ? "100px"
      : "fit-content")};
    color: ${variant === "underline" ? theme.colors.black : theme.colors.white};
    background-color: ${variant &&
    (grayArr.includes(variant)
      ? theme.colors.gray100
      : pinkArr.includes(variant)
      ? theme.colors.rose400
      : theme.colors.white)};
    text-decoration: ${variant === "underline" && "underline"};

    &:disabled {
      color: ${theme.colors.gray500};
      background-color: ${theme.colors.gray100};
    }

    &:not(:disabled):hover {
      background-color: ${variant !== "underline" &&
      variant !== "icon" &&
      theme.colors.rose500};
      color: ${variant === "underline" && theme.colors.navy100};
    }
  `}
`;
