import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LoadingPage = styled.div`
  height: 100%;
  width: 360px;
`;

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    color: ${theme.colors.gray900};
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 314px 111px;
  `}
`;
