import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

//TODO: 디자인 생성되면 일괄 css 수정 필요
export const TabLabelWrapper = styled.div<{ columns: number }>`
  ${({ columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    width: 100%;
    margin-bottom: 24px;
  `}
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    ${isSelected
      ? theme.fonts.subTitle_bold_16
      : theme.fonts.subTitle_regular_16};
    position: relative;
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    padding: 17px 0;
    color: ${isSelected ? theme.colors.pink900 : theme.colors.gray800};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 3px;
      width: 100%;
      background-color: ${isSelected && theme.colors.pink900};
    }
  `}
`;
