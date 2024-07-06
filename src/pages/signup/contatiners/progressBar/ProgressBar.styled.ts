import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProgressBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 4px;
    margin: 20px 0 24px;
    background-color: ${theme.colors.gray400};
  `}
`;

export const FilledProgressBar = styled.div<{ filledRange: number }>`
  ${({ theme, filledRange }) => css`
    width: ${filledRange}%;
    background-color: ${theme.colors.navy100};
  `}
`;
