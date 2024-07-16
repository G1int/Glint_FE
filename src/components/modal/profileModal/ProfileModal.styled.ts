import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const bottomModal = css`
  position: fixed;
  top: auto;
  bottom: 0;
  height: 644px;
  width: 360px;
  transform: translateX(-50%);
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
`;
export const ModalBody = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 10px;
  height: 100%;
  overflow: hidden;
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

// TODO: color, backgroud할지말지 등 css 디자인 시스템에 따라 수정
export const MainInfoContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subCopy_bold_24};
    position: absolute;
    height: 62px;
    // top: 408px;
    bottom: 130px;
    left: 15px;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 8px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const modifyButton = css`
  position: absolute;
  bottom: 50px;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
  padding: 10px;
`;
export const IntroduceContent = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  padding: 10px 10px 20px 10px;
  text-align: left;
`;
