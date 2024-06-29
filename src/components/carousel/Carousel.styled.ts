import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
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
  column-gap: 5px;
`;

export const CurrentState = styled.button<{ index: boolean }>`
  ${({ index }) => css`
    width: 10px; //TODO: 디자인에 따라 변경 예정
    height: 10px;
    border-radius: 50%;
    background-color: ${index ? "red" : "blue"};
  `}
`;

export const Button = styled.button`
  z-index: 100;
`;
