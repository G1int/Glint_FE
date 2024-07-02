import { useModal } from "hooks";
import * as S from "./BaseModal.styled";

interface BaseModalProps {
  children?: React.ReactNode;
  className?: string;
}

const BaseModal = ({ children, className }: BaseModalProps) => {
  const { modalDataState, backgroundRef, handleClickBackground } = useModal();

  if (modalDataState.length === 0) return null;

  return (
    <S.ModalWrapper ref={backgroundRef} onClick={handleClickBackground}>
      <S.ModalContainer id="modal-container" className={className}>
        {children}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default BaseModal;
