import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const BackLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const header = (theme: Theme) => css`
  ${theme.fonts.headline_semibold_18};
  padding-top: 40px;
  padding-left: 20px;
`;

export const Info = styled.div`
  height: 98px;
  padding: 16.25px 108px 9px 24px;
`;

export const Line = styled.div`
  ${({ theme }) => css`
    border: 0.5px solid ${theme.colors.gray500};
    width: 320px;
    align-self: center;
  `}
`;

export const ManageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  padding: 16px 19px;
  gap: 8px;
`;

export const manageButton = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 102px;
  height: 88px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${theme.fonts.subTitle_bold_14};
  color: ${theme.colors.black};
  gap: 4.5px;
  box-shadow: 0 0 30px ${theme.colors.gray300};
`;

export const icon = css`
  width: 24px;
  height: 24px;
`;

export const MainTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 32px;
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.gray900};
    ${theme.fonts.caption_regular_12};
    display: flex;
    padding-left: 20px;
    align-items: center;
  `}
`;

export const ToggleContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 64px;
    padding: 21px 20px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    ${theme.fonts.subTitle_regular_16};
    position: relative;

    &::after {
      content: "";
      width: 320px;
      height: 1px;
      background-color: ${theme.colors.gray500};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &.last::after {
      display: none;
    }
  `}
`;

export const OutButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 130px;
  height: 22px;
`;

export const outButton = (theme: Theme) => css`
  ${theme.fonts.subTitle_regular_14};
  color: ${theme.colors.gray900};
`;
