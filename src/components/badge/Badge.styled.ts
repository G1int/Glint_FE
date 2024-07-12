import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Badge = styled.button<{
  isSelected?: boolean;
  isClickable: boolean;
}>`
  ${({ isSelected, isClickable, theme }) => css`
    ${isSelected ? theme.fonts.caption_bold_12 : theme.fonts.caption_regular_12}
    height: 36px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid
      ${isSelected ? theme.colors.navy900 : theme.colors.gray300}; //TODO: gray 정의되면 수정
    border-radius: 20px;
    padding: 9px 16px;
    background-color: ${isSelected && theme.colors.navy900};
    color: ${isSelected && theme.colors.white};
    cursor: ${!isClickable && "default"};

    &:hover {
      background-color: ${isClickable && theme.colors.navy900};
      color: ${isClickable && theme.colors.white};
      border: 1px solid ${theme.colors.navy900};
    }
  `}
`;
