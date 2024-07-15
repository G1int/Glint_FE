import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 20px 66px 20px;
  row-gap: 16px;
`;

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: 16px;
    border-bottom: 1px solid ${theme.colors.black};

    // TODO: color 임시값
    &:hover {
      color: ${theme.colors.navy900};
      border-bottom: 1px solid ${theme.colors.navy900};
      cursor: pointer;
    }
  `}
`;
