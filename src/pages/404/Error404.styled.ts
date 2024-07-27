import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.div`
  height: 100%;
  width: 100%;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    color: ${theme.colors.gray900};
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 360px;
    position: absolute;
    top: 314px;
  `}
`;
