import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  overflow: hidden;
`;

export const ModalContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  border: 0px; //TODO: 디자인 시스템에 따라 변경 예정
  background-color: #ffffff; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  position: absolute;
  top: 50%; // TODO: 디자인 시스템에 따라 변경 예정
  left: 50%;
  width: 280px;
  max-height: calc(100% - 100px);
  transform: translate(-50%, -50%);
`;
