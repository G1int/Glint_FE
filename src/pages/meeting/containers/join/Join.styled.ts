import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Join = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 0 20px 24px;
`;

export const button = css`
  width: 44px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
  `}
`;

export const JoinBox = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 44px 1fr 96px;
    border: 1px solid ${theme.colors.gray600};
    border-radius: 8px;
    padding: 23px 20px;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-left: 12px;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_14};
  `}
`;
export const Job = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    color: ${theme.colors.gray900};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
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

export const MoreButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    height: 48px;
    width: 100%;
  `}
`;
