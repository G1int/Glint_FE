import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BackLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 24px;
  padding: 0 16px;
`;

export const Context = styled.div<{ hasTopContent?: boolean }>`
  ${({ hasTopContent }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: ${!hasTopContent && `0 20px 46px`};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline_semibold_18};
  `}
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
