import { useModal } from "hooks";
import * as S from "./BaseModal.styled";
import { useRef } from "react";

interface BaseModalProps {
  children?: React.ReactNode;
  mode?: "center" | "bottom";
}

const BaseModal = ({ children, mode }: BaseModalProps) => {
  const { modalDataState, handleCloseModal } = useModal();

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      handleCloseModal();
    } else if (backgroundRef.current?.querySelector("#modal-container")) {
      return null;
    }
  };

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
