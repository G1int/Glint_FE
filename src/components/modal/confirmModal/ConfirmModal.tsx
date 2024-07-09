import { BaseModal, Button } from "components";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  content?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
  handleConfirmClick?: () => void;
  handleCloseClick?: () => void;
}

const ConfirmModal = ({
  content,
  cancelLabel,
  confirmLabel,
  className,
  handleConfirmClick,
  handleCloseClick,
}: ConfirmModalProps) => {
  return (
    <BaseModal className={className}>
      <S.ModalBody>{content}</S.ModalBody>
      <S.ModalFooter>
        {cancelLabel && (
          <Button
            variant={confirmLabel ? "mdWhite" : "lgWhite"}
            onClick={handleCloseClick}
          >
            {cancelLabel}
          </Button>
        )}
        {confirmLabel && (
          <Button
            variant={cancelLabel ? "mdWhite" : "lgWhite"}
            onClick={handleConfirmClick}
          >
            {confirmLabel}
          </Button>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
