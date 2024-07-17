import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const TagContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
`;

export const input = (theme: Theme) => css`
  width: 320px;
  height: 48px;
  border-radius: 6px;
  border: 0.5px solid ${theme.colors.gray600};
  padding: 13px 12px;
  resize: none;
`;

export const badge = (theme: Theme) => css`
  ${theme.fonts.caption_regular_12};
  color: ${theme.colors.black};
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
