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
    padding-bottom: 80px;

    & > div {
      display: flex;
      flex-direction: column;
      height: fit-content;
      padding: 24px 20px;
    }
    & > div:not(:last-of-type) {
      border-bottom: 8px solid ${theme.colors.gray300};
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

export const UnlockWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      ${theme.fonts.subTitle_semibold_14};
      width: 100%;
      color: ${theme.colors.gray900};
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
    justify-content: center;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 12px 20px;
    background-color: ${theme.colors.white};
    z-index: 1000;
  `}
`;

export const button = css`
  max-width: 360px;
`;

export const Conditions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    border-radius: 8px;
    padding: 20px;
    background-color: ${theme.colors.gray400};
  `}
`;

export const Condition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConditionRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 10px;
    padding: 5.5px;

    & > span {
      ${theme.fonts.subTitle_regular_14};

      &:first-of-type {
        ${theme.fonts.subTitle_regular_14};
        color: ${theme.colors.gray900};
      }
    }
  `}
`;

export const Division = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    margin: 12px 0;
    border: 0;
    background-color: ${theme.colors.gray600};
  `}
`;

export const LocationBox = styled.div`
  display: flex;
  gap: 8px;
`;
