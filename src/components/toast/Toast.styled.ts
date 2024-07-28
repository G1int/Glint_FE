import styled from "@emotion/styled";

export const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 70px;
  height: max-content;
  min-height: 52px;
  pointer-events: none;
  transform: translateX(-50%);
  z-index: 10000000;
`;

export const ToastItemWrapper = styled.div<{ index: number }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ index }) => `calc(70px + ${index} * (52px + 14.5px))`};
  pointer-events: none;
`;
