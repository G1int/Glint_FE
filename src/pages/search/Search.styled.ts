import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  display: flex;
  height: 80px;
  align-self: center;
  width: 320px;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 320px;
    position: relative;
    height: 32px;
    margin-top: 36px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 320px;
      border-bottom: 2px solid ${theme.colors.black};
    }
  `}
`;

export const input = css`
  width: 264px;
  height: 24px;
  border-bottom: 0px;
  padding: 0px;
`;

export const searchIcon = css`
  position: absolute;
  right: 6px;
`;

export const PopularSearchWrapper = styled.div`
  height: 102.44px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
  `}
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const badge = (theme: Theme) => css`
  ${theme.fonts.caption_regular_12};
  color: ${theme.colors.black};
  height: 32px;
`;

export const Line = styled.div`
  ${({ theme }) => css`
    border: 4px solid ${theme.colors.gray300};
  `}
`;

export const CurrentSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 23.56px 27px;
`;

export const CurrentSearchItem = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_14};
    color: ${theme.colors.gray900};
    display: flex;
    justify-content: space-between;
    height: 20px;
    width: 312px;
    // margin-bottom: 16px;
    align-items: center;
  `}
`;
