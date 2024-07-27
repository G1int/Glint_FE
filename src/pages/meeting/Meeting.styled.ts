import { css } from "@emotion/react";

export const backLayout = css`
  display: flex;
  justify-content: center;
`;

export const tab = css`
  & > div:last-of-type {
    margin-top: calc(80px + 54px + 24px);
  }
`;
