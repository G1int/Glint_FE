import { useModal } from "hooks";
import { Button } from "components";
import { ModalPortal } from "./potal";
import * as S from "./Modal.styled";

const Modal = () => {
  const { handleCloseModal, modalDataState } = useModal();

  if (!modalDataState.isOpen) return null;

  return (
    <ModalPortal>
      {modalDataState.isOpen && (
        <S.ModalWrapper>
          <S.ModalBackGround />
          <S.ModalContainer>
            <S.ModalHeader>{modalDataState.title}</S.ModalHeader>
            <S.ModalBody>{modalDataState.content}</S.ModalBody>
            <S.ModalFooter>
              <Button size="sm">OK</Button>
              <Button size="sm" onClick={() => handleCloseModal()}>
                Close
              </Button>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.ModalWrapper>
      )}
    </ModalPortal>
  );
};

export default Modal;
