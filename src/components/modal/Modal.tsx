import React from "react";
import { ModalPortal } from "./potal";
import { useRecoilState } from "recoil";
import { modalState } from "atoms";

const Modal = () => {
  const [modalDataState] = useRecoilState(modalState);

  return (
    <ModalPortal>
      {modalDataState &&
        modalDataState.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
    </ModalPortal>
  );
};

export default Modal;
