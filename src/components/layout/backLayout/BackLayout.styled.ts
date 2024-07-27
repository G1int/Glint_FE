import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BackLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  height: 100%;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    height: 80px;
    padding: 24px 0 16px;
    background-color: ${theme.colors.white};
    z-index: 100000;
  `}
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
