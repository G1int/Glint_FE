import { useModal } from "hooks";
import * as S from "./BaseModal.styled";

interface BaseModalProps {
  children?: React.ReactNode;
  mode?: "center" | "bottom";
}

const BaseModal = ({ children, mode }: BaseModalProps) => {
  const { modalDataState, backgroundRef, handleClickBackground } = useModal();

  if (modalDataState.length === 0) return null;

  return (
    <S.ModalWrapper ref={backgroundRef} onClick={handleClickBackground}>
      <S.ModalContainer id="modal-container" mode={mode}>
        {children}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default BaseModal;
