import { useModal } from "hooks";
import * as S from "./BaseModal.styled";

interface BaseModalProps {
  children?: React.ReactNode;
  mode?: "center" | "bottom";
}

const BaseModal = ({ children, mode }: BaseModalProps) => {
  const { modalDataState, handleCloseModal } = useModal();

  if (modalDataState.length === 0) return null;
  // TODO: ModalWrapper Click 시, 화면 close (ref 사용 구현)
  return (
    <S.ModalWrapper onClick={handleCloseModal}>
      <S.ModalContainer mode={mode}>{children}</S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default BaseModal;
