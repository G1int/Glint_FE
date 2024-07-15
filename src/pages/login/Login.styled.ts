import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 638px;
  left: 20px;
  right: 20px;
  row-gap: 16px;
`;

export const text = (theme: Theme) => css`
  ${theme.fonts.subTitle_regular_16};
  border-bottom: 1px solid ${theme.colors.black};

  &:hover {
    color: ${theme.colors.navy900};
    border-bottom: 1px solid ${theme.colors.navy900};
    cursor: pointer;
  }
`;
