import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Badge = styled.button<{
  isSelected?: boolean;
  isClickable: boolean;
}>`
  ${({ isSelected, isClickable }) => css`
    //TODO: 디자인 나온 후 수정 예정
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    border-radius: 20px;
    padding: 5px 15px;
    background-color: ${isSelected && "rgba(1, 1, 1, 0.2)"};
    cursor: ${!isClickable && "default"};

    &:hover {
      background-color: ${isClickable && "red"};
    }
  `}
`;
