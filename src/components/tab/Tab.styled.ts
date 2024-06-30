import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

//TODO: 디자인 생성되면 일괄 css 수정 필요
export const TabLabelWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 10px;
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    display: flex;
    border-bottom: ${isSelected && "1px solid black"};
  `}
`;
