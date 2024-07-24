import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MeetingContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding-bottom: 64px;
`;

export const More = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;
