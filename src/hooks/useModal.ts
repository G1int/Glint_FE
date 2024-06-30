import { useRecoilState } from "recoil";

import { modalState } from "atoms";

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const handleOpenModal = (modal: React.ReactNode) => {
    const newModal = [...modalDataState];
    newModal.push(modal);
    setModalDataState(newModal);
  };

  const handleCloseModal = () => {
    const newModal = [...modalDataState];
    newModal.pop();
    setModalDataState(newModal);
  };

  return {
    modalDataState,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
