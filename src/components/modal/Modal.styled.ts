import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;

export const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid #ffffff; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  background-color: #ffffff; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: auto;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #dee2e6; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  font-size: 2rem;
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 1.5rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #dee3e6; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  gap: 5px;
`;
