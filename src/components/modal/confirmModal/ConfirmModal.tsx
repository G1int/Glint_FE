import { useModal } from "hooks";
import * as S from "./ConfirmModal.styled";
import { Button } from "components/buttons";
import { BaseModal } from "../baseModal";

const ConfirmModal = () => {
  const { handleCloseModal, modalDataState } = useModal();

  return (
    <BaseModal>
      {/* <S.ModalHeader>{modalDataState.title}</S.ModalHeader> */}
      <S.ModalBody>{modalDataState.content}</S.ModalBody>
      <S.ModalFooter>
        {modalDataState.cancelLabel && (
          <Button onClick={() => handleCloseModal()}>
            {modalDataState.cancelLabel}
          </Button>
        )}
        {modalDataState.confirmLabel && (
          <Button onClick={() => handleCloseModal()}>
            {modalDataState.confirmLabel}
          </Button>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
