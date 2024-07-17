import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-bottom: 8px solid ${theme.colors.gray300};
      padding: 24px 0;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css``}
`;

export const badge = css`
  border: 0;
  margin-bottom: 16px;
`;
