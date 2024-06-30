import { ModalPortal } from "./potal";
import { useRecoilState } from "recoil";
import { modalState } from "atoms";

const Modal = () => {
  const [modalDataState] = useRecoilState(modalState);

  return (
    <ModalPortal>
      {modalDataState && modalDataState.map((item) => <>{item}</>)}
    </ModalPortal>
  );
};

export default Modal;
