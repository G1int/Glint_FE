import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
    margin-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `}
`;

export const MeetingInfoWrapper = styled.div`
  height: 64px;
  margin-top: 12px;
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

export const PersonCapacity = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_14};
    color: ${theme.colors.black};
  `}}
`;

export const PersonInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    display: flex;
    align-items: center;
    height: 28px;
  `}
`;

export const Highlight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.pink900};
  `}
`;
