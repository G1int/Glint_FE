import { useModal } from "hooks";
import * as S from "./BaseModal.styled";

interface BaseModalProps {
  children?: React.ReactNode;
}

const BaseModal = ({ children }: BaseModalProps) => {
  const { modalDataState, handleCloseModal } = useModal();

  if (!modalDataState.isOpen) return null;

  return (
    <S.ModalWrapper onClick={handleCloseModal}>
      <S.ModalContainer mode={modalDataState.mode}>{children}</S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default BaseModal;
