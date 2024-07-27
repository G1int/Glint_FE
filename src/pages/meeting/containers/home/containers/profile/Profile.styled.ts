import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 156px);
  gap: 8px;
`;

const box = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 156px;
  border-radius: 12px;
  text-align: center;

  & > svg {
    margin-bottom: 11px;
  }
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    ${box};
    ${theme.fonts.caption_regular_12};
    position: relative;
    background-color: ${theme.colors.gray400};
  `}
`;

export const ImgContainer = styled.div<{ isBlur: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  ${({ isBlur }) =>
    isBlur &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        z-index: 1;
      }
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;

export const ProfileMainInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
  `}
`;

export const Age = styled.span`
  padding-top: 2px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  padding: 12px 0;
`;

export const WaitingInfoText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray900};
  `}
`;

export const WaitingBox = styled.div`
  ${({ theme }) => css`
    ${box};
    background-color: ${theme.colors.gray300};
  `}
`;

export const EmptyBox = styled.div`
  ${({ theme }) => css`
    ${box};
    border: 1px dashed ${theme.colors.gray700};
    background-color: transparent;
  `}
`;
