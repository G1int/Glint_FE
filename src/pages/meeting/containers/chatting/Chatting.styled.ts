import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Chatting = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    column-gap: 16px;
    width: 100%;
    padding: 12px 20px;
    background-color: ${theme.colors.white};
  `}
`;

export const ChatInfo = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 12px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray900};
  `}
`;

export const ChatBox = styled.div`
  width: 100%;
  padding: 0 26px;
`;

export const input = (theme: Theme) => css`
  ${theme.fonts.caption_regular_12};
  min-width: 245px;
  height: min-content;
  border-radius: 8px;
  border: 0;
  padding: 13px 12px;
  background-color: ${theme.colors.gray400};

  &::placeholder {
    ${theme.fonts.caption_regular_12};
    color: ${theme.colors.gray900};
  }
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 12px 12px 65px;
`;
const isMeCss = (isMe: boolean) => css`
  display: flex;
  justify-content: ${isMe ? "flex-end" : "flex-start"};
`;

export const ChatMessageBox = styled.div<{ isMe: boolean }>`
  ${({ isMe }) => css`
    ${isMeCss(isMe)};
    width: 100%;
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_14};
    display: flex;
    justify-content: flex-start;
    padding: 6px 0 12px;
  `}
`;

export const ChatContent = styled.div<{ isMe: boolean }>`
  ${({ theme, isMe }) => css`
    ${theme.fonts.caption_regular_12};
    ${isMeCss(isMe)};
    width: fit-content;
    padding: 12px;
    margin-left: ${!isMe && "10px"};
    margin-bottom: 8px;
    border-radius: ${isMe ? "8px 0 8px 8px" : "0 8px 8px 8px"};
    color: ${isMe && theme.colors.white};
    background-color: ${isMe ? theme.colors.pink900 : theme.colors.gray400};
  `}
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Date = styled.span<{ isMe: boolean }>`
  ${({ theme, isMe }) => css`
    ${theme.fonts.caption_bold_10};
    margin-left: ${!isMe && "10px"};
    color: ${theme.colors.gray900};
  `}
`;

export const ChatInfoBox = styled.div<{ isMe: boolean }>`
  ${({ isMe }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${isMe ? "flex-end" : "flex-start"};
    padding-left: ${!isMe && "12px"};
  `}
`;
