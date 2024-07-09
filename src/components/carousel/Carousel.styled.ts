import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  position: relative;
`;

export const CarouselContainer = styled.div`
  display: flex;
`;

export const CarouselItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CarouselItem = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

export const CurrentStateWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const CurrentState = styled.button<{ index: boolean }>`
  ${({ index, theme }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${index
      ? theme.colors.black
      : theme.colors.gray200}; //TODO: 디자인에 따라 변경 예정(gray200부분)
  `}
`;

export const Button = styled.button`
  position: absolute;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  top: 330px;
`;

export const PrevButton = styled(Button)`
  left: 6px;
`;

export const prevIcon = css`
  rotate: 180deg;
`;

export const NextButton = styled(Button)`
  right: 6px;
`;
