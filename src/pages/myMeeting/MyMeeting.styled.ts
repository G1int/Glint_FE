import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  ${theme.fonts.headline_semibold_18};
  position: fixed;
  top: 0;
  width: 360px;
  height: 80px;
  background-color: ${theme.colors.white};
  z-index: 100000;
  padding-left: 20px;
  padding-top: 40px;
`;
