import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      height: fit-content;
      border-bottom: 8px solid ${theme.colors.gray300};
      padding: 24px 20px;
    }
  `}
`;

export const MainContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: fit-content;
    border-bottom: 8px solid ${theme.colors.gray300};
    padding: 0 24px 20px !important;

    span:first-of-type {
      ${theme.fonts.headline_semibold_18};
      margin-bottom: 16px;
    }

    span:last-of-type {
      ${theme.fonts.subTitle_regular_14};
    }
  `}
`;

export const Content = styled.div`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16}
  `}
`;

export const Desc = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    margin-top: 4px;
    color: ${theme.colors.gray900};
  `}
`;

export const badge = css`
  border: 0;
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 12px 20px;
    background-color: ${theme.colors.white};
    z-index: 1000;
  `}
`;

export const button = css`
  width: 100%;
`;
