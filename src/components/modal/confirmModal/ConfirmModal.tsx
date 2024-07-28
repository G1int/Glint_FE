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
        {title && <S.Title>{title}</S.Title>}
        {content && <S.Content isTitle={!!title}>{content}</S.Content>}
      </S.ModalBody>
      <S.ModalFooter>
        {cancelLabel && (
          <Button css={S.cancelButton} onClick={handleCloseClick}>
            {cancelLabel}
          </Button>
        )}
        {confirmLabel && (
          <Button css={S.confirmButton} onClick={handleConfirmClick}>
            {confirmLabel}
          </Button>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
