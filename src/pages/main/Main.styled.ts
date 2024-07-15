import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 64px;
`;

export const header = css`
  padding-top: 38px;
  padding-left: 22px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: 30px;
  align-self: center;
`;

export const logoIcon = css`
  align-content: center;
`;

export const BellIconWrapper = styled.div`
  padding-left: 208px;
  padding-top: 2px;
`;

export const MainIconContainer = styled.div`
  ${({ theme }) => css`
    height: 206px;
    width: 328px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 16px;
    margin-left: 16px;
    align-items: center;
    justify-items: center;
    box-shadow: 0 0 30px ${theme.colors.gray300};
  `}
`;

export const MainIconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 8px;
    cursor: pointer;
  `}
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 237px;
  padding: 31px 16px 19px 19px;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
  `}
`;

export const MeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const MeetingContainer = styled.div`
  ${({ theme }) => css`
    height: 162px;
    width: 328px;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 0 30px ${theme.colors.gray300};
    cursor: pointer;
  `}
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const MeetingTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_14};
    max-height: 31px;
    width: 296px;
    padding-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `}
`;

export const MeetingInfoWrapper = styled.div`
  height: 64px;
  padding-top: 12px;
  display: flex;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100px;
`;

export const Img = css`
  width: 100%;
  height: 64px;
  border-radius: 8px;
`;

export const Close = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 2px;
    left: 0px;
    color: ${theme.colors.white};
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    align-content: center;
    text-align: center;
  `}
`;

export const PersonInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    ${theme.fonts.subTitle_regular_14};
  `}
`;

export const PersonInfo = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
`;

export const Highlight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.pink900};
  `}
`;

export const Gray = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
  `}
`;

export const More = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const addIcon = css`
  position: fixed;
  bottom: 80px;
  left: 288px;
  width: 56px;
  height: 56px;
  background-color: transparent;
`;
