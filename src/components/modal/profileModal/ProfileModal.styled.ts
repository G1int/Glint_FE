import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const bottomModal = css`
  position: fixed;
  top: auto;
  bottom: 0;
  height: 644px;
  width: 360px;
  transform: translateX(-50%);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
export const StaticContainer = styled.div`
  height: 44px;
`;

export const rectangleIcon = css`
  position: absolute;
  bottom: 626.64px;
  left: 162px;
`;

export const closeIcon = css`
  position: absolute;
  left: 318px;
  bottom: 608px;
  cursor: pointer;
`;

export const ScrollContainer = styled.div`
  height: calc(100% - 44px);
  overflow: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 600px;
`;

export const Img = styled.img`
  width: 360px;
  height: 600px;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  align-self: center;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`;

export const MainInfoContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subCopy_bold_24};
    height: 62px;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    top: 408px;
    bottom: 130px;
    left: 15px;
  `}
`;

export const InfoContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    display: flex;
    column-gap: 10px;
    align-items: center;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 24px 130px 20px;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const modifyButton = css`
  position: absolute;
  bottom: 50px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 4px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
    height: 22px;
    align-content: center;
    text-align: left;
  `}
`;
export const IntroduceContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    text-align: left;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex-wrap: wrap;
  `}
`;

export const badge = (theme: Theme) => css`
  ${theme.fonts.caption_regular_12};
  color: ${theme.colors.black};
`;

export const NoContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    color: ${theme.colors.gray900};
  `}
`;
