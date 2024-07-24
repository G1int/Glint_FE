import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  ${theme.fonts.headline_semibold_18};
  padding-top: 40px;
  padding-left: 20px;
`;
