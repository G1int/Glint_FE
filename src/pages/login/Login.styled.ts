import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// TODO: 임시코드
export const CarouselContainer = styled.div`
  display: flex;
  height: 592px;
  background-color: grey;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 208px;
  row-gap: 16px;
`;

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: 16px;
    border-bottom: 1px solid ${theme.colors.black};

    // TODO: color 임시값
    &:hover {
      color: ${theme.colors.rose500};
      border-bottom: 1px solid ${theme.colors.rose500};
      cursor: pointer;
    }
  `}
`;
