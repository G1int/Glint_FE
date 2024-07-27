import { useRecoilValue } from "recoil";

import { toastState } from "atoms";
import { ToastItem } from "./toastItem";
import * as S from "./Toast.styled";

function Toast() {
  const toasts = useRecoilValue(toastState);

  return (
    <S.Toast>
      {toasts.map((toast, index) => (
        <S.ToastItemWrapper key={toast.id} index={index}>
          <ToastItem {...toast} />
        </S.ToastItemWrapper>
      ))}
    </S.Toast>
  );
}

export default Toast;
