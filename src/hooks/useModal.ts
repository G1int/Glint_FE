import { modalState } from "atoms/common";
import { useRecoilState } from "recoil";

interface ModalType {
  title: string;
  content: React.ReactNode | string;
}

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const handleOpenModal = ({ title, content }: ModalType) => {
    setModalDataState({ isOpen: true, content: content, title: title });
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
