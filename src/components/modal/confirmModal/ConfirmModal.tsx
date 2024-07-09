import { BaseModal, Button } from "components";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
  handleConfirmClick?: () => void;
  handleCloseClick?: () => void;
}

const ConfirmModal = ({
  title,
  content,
  cancelLabel,
  confirmLabel,
  className,
  handleConfirmClick,
  handleCloseClick,
}: ConfirmModalProps) => {
  return (
    <BaseModal className={className}>
      <S.ModalBody>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.ModalBody>
      <S.ModalFooter>
        {cancelLabel && (
          <S.ModalButton>
            <Button css={S.cancelButton} onClick={handleCloseClick}>
              {cancelLabel}
            </Button>
          </S.ModalButton>
        )}
        {confirmLabel && (
          <S.ModalButton>
            <Button css={S.confirmButton} onClick={handleConfirmClick}>
              {confirmLabel}
            </Button>
          </S.ModalButton>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
