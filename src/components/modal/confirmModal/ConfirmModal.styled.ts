import styled from "@emotion/styled";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  // border-bottom: 1px solid #dee2e6; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  font-size: 2rem;
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 2rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 10px;
  // border-top: 1px solid #dee3e6; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  gap: 5px;
`;
