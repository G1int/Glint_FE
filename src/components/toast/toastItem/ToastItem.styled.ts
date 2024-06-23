import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const scaleUp = keyframes`
  from { max-height: 0;}
  to {max-height: 100px;}
`;

const scaleDown = keyframes`
  from { max-height: 100px;}
  to { max-height: 0;}
 `;

const fadeIn = keyframes`
from { opacity: 0; transform: translateY(-50%);}
  to { opacity: 1; transform: translateY(0)}
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0)}
  to { opacity: 0; transform: translateY(50%)}
 `;

export const ToastItem = styled.div<{ isClosing: boolean }>`
  ${({ isClosing }) => css`
    max-height: 0;
    overflow: visible;
    animation: 0.8s forwards ${isClosing ? scaleDown : scaleUp};
    animation: 0.3s forwards ${isClosing ? fadeOut : fadeIn};

    div {
      width: 340px;
      padding: 10px 0;
      color: white; //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
      background-color: black;
      text-align: center;
    }
  `}
`;
