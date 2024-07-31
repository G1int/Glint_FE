import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const bottomModal = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  top: auto;
  bottom: 0;
  max-height: 742px;
  width: 360px;
  transform: translateX(-50%);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const StaticContainer = styled.div`
  height: 44px;
  display: flex;
`;

export const rectangleIcon = css`
  margin-left: 162px;
  margin-top: 10.85px;
`;

export const closeIcon = css`
  margin-left: 120px;
  margin-top: 12px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

export const Header = styled.div`
  height: auto;
  min-height: 70px;
  max-height: 90px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    color: ${theme.colors.gray900};
  `}
`;

export const Highlight = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    color: ${theme.colors.pink900};
  `}
`;

export const SelectedLocation = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray300};
    display: flex;
    flex-direction: row;
    padding: 16px 20px;
    gap: 12px;
    flex-wrap: wrap;
    min-height: 70px;
    max-height: 120px;
    overflow-y: auto;
  `}
`;

export const badge = (theme: Theme) => css`
  ${theme.fonts.caption_bold_12};
  color: ${theme.colors.white};
  background-color: ${theme.colors.navy900};
  border: 0.5px solid ${theme.colors.navy900};
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LocationContainer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray900};
    border-bottom: 1px solid ${theme.colors.gray900};
    flex: 1;
    overflow-y: auto;
  `}
`;

export const LocationTitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.caption_semibold_12};
    height: 38px;
    border-bottom: 1px solid ${theme.colors.gray400};
    color: ${theme.colors.gray900};
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    text-align: center;
  `}
`;

export const LocationTitle = styled.span<{ isLeft?: boolean }>`
  ${({ isLeft }) => css`
    width: ${isLeft ? "119px" : "240px"};
  `}
`;

export const Separator = styled.div`
  height: 10px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray500};
  position: absolute;
  top: 14px;
  left: 119px;
`;

export const LocationListWrapper = styled.div`
  display: flex;
  max-height: 336px;
  overflow-y: auto;
`;

export const StateList = styled.div`
  ${({ theme }) => css`
    width: 119px;
    border-right: 1px solid ${theme.colors.gray400};
    height: 335px;
    overflow-y: auto;
  `}
`;

export const CityList = styled.div`
  width: 240px;
  height: 335px;
  overflow-y: auto;
`;

export const checkIcon = css`
  margin-right: 20px;
`;

export const LocationItem = styled.div<{
  isSelected: boolean;
  isCity?: boolean;
}>`
  ${({ theme, isSelected, isCity }) => css`
    ${isSelected
      ? theme.fonts.subTitle_semibold_16
      : theme.fonts.subTitle_regular_16};
    color: ${isSelected && isCity
      ? theme.colors.pink900
      : isSelected && !isCity
      ? theme.colors.black
      : theme.colors.gray800};
    padding-left: 20px;
    height: 47.92px;
    cursor: pointer;
    background-color: ${isSelected && isCity
      ? theme.colors.pink100
      : isSelected && !isCity
      ? theme.colors.gray400
      : theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      ${theme.fonts.subTitle_semibold_16};
      background-color: ${isCity ? theme.colors.pink100 : theme.colors.gray400};
      color: ${isCity ? theme.colors.pink900 : theme.colors.black};
    }

    svg {
      & path {
        fill: ${isSelected && theme.colors.pink900};
      }
    }
  `}
`;

export const button = css`
  width: 156px;
`;

export const ButtonWrapper = styled.div`
  height: 104px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 27px 20px;
`;
