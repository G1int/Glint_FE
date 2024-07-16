import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.div`
  overflow-y: auto;
`;
export const Img = styled.img`
  height: 360px;
  width: 360px;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  padding-left: 20px;
  height: 65px;
  align-items: center;
  position: relative;
`;

export const line = (theme: Theme) => css`
  position: relative;

  &:after {
    content: "";
    width: 320px;
    height: 1px;
    background-color: ${theme.colors.gray500};
    position: absolute;
    bottom: 0;
`;

export const DropdownContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    gap: 8px;
    min-height: 116px;
    position: relative;

    &:not(:last-child)::after {
      content: "";
      width: 320px;
      height: 1px;
      background-color: ${theme.colors.gray500};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline_semibold_18}; //TODO: fontsize 변경
    flex: 1;
  `}
`;

export const Height = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_14};
    padding-right: 8px;
  `}
`;

export const rightIcon = css`
  margin-right: 20px;
`;

export const Line = styled.div`
  ${({ theme }) => css`
    border: 4px solid ${theme.colors.gray300};
  `}
`;

export const InfoTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_14};
    flex: 1;
  `}
`;

export const DropdownTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_14};
    margin-top: 16px;
    height: 28px;
    display: flex;
    align-items: center;
  `}
`;

export const LineTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.caption_semibold_12};
    height: 32px;
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.gray900};
    display: flex;
    padding-left: 20px;
    align-items: center;
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  gap: 12px;
`;

export const TitleWrapper = styled.div`
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_14};
    color: ${theme.colors.gray800};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 48px 20px 24px 20px;
`;
