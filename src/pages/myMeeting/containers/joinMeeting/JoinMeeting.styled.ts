import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MeetingContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding-top: 78px;
  padding-bottom: 80px;
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

export const EmptyUserJoinMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 33%; //NOTE: 위치값이 맞지 않아 임의로 %처리함
`;

export const EmptyUserText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    color: ${theme.colors.gray900};
    text-align: center;
  `}
`;

export const StickerBox = styled.div`
  ${({ theme }) => css`
    margin-bottom: 16px;
    border-radius: 50%;
    padding: 24px;
    background-color: ${theme.colors.gray300};
  `}
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  height: 550px;
  align-items: center;
  justify-content: center;
`;
