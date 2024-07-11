import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 64px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.white};
  `}
`;

export const button = css`
  width: 90px;
  height: 100%;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const icon = (isSelected: boolean) => (theme: Theme) =>
  css`
    width: 24px;
    height: 24px;

    path:first-child {
      fill: ${isSelected && theme.colors.navy900};
    }
  `;

export const Text = styled.span<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    color: ${isSelected ? theme.colors.navy900 : theme.colors.gray500};
    font-size: 1.2rem;
  `}
`;

export const IconWrapper = styled.div<{ isSelected: boolean; text: string }>`
  ${({ theme, isSelected, text }) => css`
    svg {
      width: 24px;
      height: 24px;

      & path:nth-of-type(1) {
        fill: ${(text === "홈" || text === "내미팅" || text === "내정보") &&
        isSelected &&
        theme.colors.navy900};
        stroke: ${(text === "검색" || text === "내미팅") &&
        isSelected &&
        theme.colors.navy900};
      }
      & path:nth-of-type(2) {
        fill: ${(text === "검색" || text === "내미팅") &&
        isSelected &&
        theme.colors.navy900};
        stroke: ${text === "검색" && isSelected && theme.colors.navy900};
      }
      & path:nth-of-type(3) {
        stroke: ${text === "내미팅" && isSelected && theme.colors.navy900};
      }
      & path:nth-of-type(4) {
        fill: ${text === "내미팅" && isSelected && theme.colors.navy900};
        stroke: ${text === "내미팅" && isSelected && theme.colors.navy900};
      }
      & path:nth-of-type(5) {
        fill: ${text === "내미팅" && isSelected && theme.colors.navy900};
      }
      & path:nth-of-type(6) {
        stroke: ${text === "내미팅" && isSelected && theme.colors.navy900};
      }
    }
  `}
`;
