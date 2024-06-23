import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Input = styled.input<{ hasError?: boolean }>`
  ${({ hasError }) => css`
    border: 0;
    border-bottom: 1px solid ${hasError ? "red" : "black"};
  `}
`;
