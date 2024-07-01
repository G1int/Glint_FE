import { useRecoilState } from "recoil";

import { modalState } from "atoms";
import { useRef } from "react";

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);
  const backgroundRef = useRef<HTMLDivElement>(null);

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

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      handleCloseModal();
    } else if (backgroundRef.current?.querySelector("#modal-container")) {
      return null;
    }
  };

  return {
    modalDataState,
    handleOpenModal,
    handleCloseModal,
    handleClickBackground,
    backgroundRef,
  };
};

export default useModal;
