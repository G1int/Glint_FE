import { useModal } from "hooks";
import { BaseModal, Button } from "components";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  content?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
}

const ConfirmModal = ({
  content,
  cancelLabel,
  confirmLabel,
  className,
}: ConfirmModalProps) => {
  const { handleCloseModal } = useModal();

  const handleConfirmClick = () => {
    console.log("confirm!");
    handleCloseModal();
  };

  return (
    <BaseModal className={className}>
      <S.ModalBody>{content}</S.ModalBody>
      <S.ModalFooter>
        {cancelLabel && (
          <Button onClick={() => handleCloseModal()}>{cancelLabel}</Button>
        )}
        {confirmLabel && (
          <Button onClick={handleConfirmClick}>{confirmLabel}</Button>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
