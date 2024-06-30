import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.dialog<{ mode?: "center" | "bottom" }>`
  ${({ mode }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid #ffffff; //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
    background-color: #ffffff; //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
    position: ${mode === "bottom" ? "fixed" : "absolute"};
    top: ${mode === "bottom" ? "" : "50%"};
    bottom: ${mode === "bottom" && "10px"};
    left: 50%;
    width: ${mode === "bottom"
      ? "95%"
      : "342px"}; // TODO: 디자인 시스템에 따라 변경 예정
    height: auto;
    text-align: center;
    transform: ${mode === "bottom"
      ? "translateX(-50%)"
      : "translate(-50%, -50%)"};
  `}
`;
