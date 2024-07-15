import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const FormRadioButtonWrapper = styled.div`
  display: flex;
`;

export const FormRadioButton = styled.label<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    display: flex;
    justify-content: space-between;
    border: 1px solid
      ${isSelected ? theme.colors.pink900 : theme.colors.gray600};
    border-radius: 6px;
    padding: 13px 20px;
    font-size: 16px;
    color: ${isSelected ? theme.colors.pink900 : theme.colors.gray800};

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
