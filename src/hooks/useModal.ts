import { useRecoilState } from "recoil";

import { modalState } from "atoms";

interface ModalType {
  title: string;
  content: React.ReactNode;
}

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const handleOpenModal = ({ title, content }: ModalType) => {
    setModalDataState({
      isOpen: true,
      content: content,
      title: title,
    });
  };

  const handleCloseModal = () => {
    setModalDataState({ isOpen: false, content: "", title: "" });
  };

  return {
    modalDataState,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
