import { useModal } from "hooks";
import { BaseModal } from "components";
import { ModalPortal } from "./potal";

interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const { modalDataState } = useModal();

  if (!modalDataState.isOpen) return null;

  return (
    <ModalPortal>
      {modalDataState.isOpen && <BaseModal>{children}</BaseModal>}
    </ModalPortal>
  );
};

export default Modal;
