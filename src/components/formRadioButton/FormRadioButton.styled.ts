import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const FormRadioButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const FormRadioButton = styled.label<{
  isSelected: boolean;
  variant?: "smNavy" | "lgPink";
}>`
  ${({ theme, variant, isSelected }) => css`
    ${variant === "lgPink"
      ? theme.fonts.subTitle_regular_16
      : theme.fonts.caption_bold_12};
    display: flex;
    justify-content: space-between;
    width: fit-content;
    border: 1px solid
      ${isSelected
        ? variant === "lgPink"
          ? theme.colors.pink900
          : "0"
        : theme.colors.gray600};
    border-radius: ${variant === "lgPink" ? "6px" : "20px"};
    padding: ${variant === "lgPink" ? "13px 20px" : "9px 16px"};
    color: ${isSelected
      ? variant === "lgPink"
        ? theme.colors.pink900
        : theme.colors.white
      : theme.colors.gray800};
    background-color: ${isSelected &&
    variant === "smNavy" &&
    theme.colors.navy900};

    & > input[type="radio"] {
      display: none;
    }
  `}
`;

export const checkIcon = (isSelected: boolean) => (theme: Theme) =>
  css`
    & > path {
      fill: ${isSelected && theme.colors.pink900};
    }
  `;
