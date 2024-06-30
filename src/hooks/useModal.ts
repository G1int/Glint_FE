import { useRecoilState } from "recoil";

import { modalState } from "atoms";

interface ModalType {
  title?: string;
  content: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  mode: "center" | "bottom";
}

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const handleOpenModal = ({
    title,
    content,
    confirmLabel,
    cancelLabel,
    mode,
  }: ModalType) => {
    setModalDataState({
      isOpen: true,
      content: content,
      title: title,
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      mode: mode,
    });
  };

  const handleCloseModal = () => {
    setModalDataState({
      isOpen: false,
      content: "",
      title: "",
      confirmLabel: "",
      cancelLabel: "",
    });
  };

  return {
    modalDataState,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
