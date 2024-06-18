import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Input = styled.input`
  border: 1px solid cadetblue;
`;

export const icon = css`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);

  & > path {
    fill: blue;
  }
`;
