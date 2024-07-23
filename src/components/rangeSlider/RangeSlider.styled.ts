import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  width: 320px;
  height: 24px;
  display: flex;
  align-items: center;
  align-self: center;
`;
export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 16px;
  background-color: #ddd;
`;

export const SliderRangeInner = styled.div<{ left: number; width: number }>`
  ${({ left, width, theme }) => css`
    position: absolute;
    left: ${left}%;
    width: ${width}%;
    background: ${theme.colors.navy900};
    height: 4px;
  `}
`;

export const RangeWrapper = styled.div`
  position: relative;
  height: 4px;
`;

export const Range = styled.input`
  ${({ theme }) => css`
    position: absolute;
    top: -10px;
    width: 100%;
    -webkit-appearance: none;
    background: none;
    pointer-events: none;

    &::-webkit-slider-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      border: 1.5px solid ${theme.colors.navy900};
      background-color: ${theme.colors.white};
      -webkit-appearance: none;
      pointer-events: auto;
    }
  `}
`;
