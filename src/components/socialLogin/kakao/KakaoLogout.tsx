import { Button } from "components/buttons";
import { ConfirmModal } from "components/modal";
import { useModal, useToast } from "hooks";
import { useNavigate } from "react-router-dom";
import { usePutLogout } from "services";

interface KakaoLogoutProps {
  className?: string;
}

const KakaoLogout = ({ className }: KakaoLogoutProps) => {
  const navigate = useNavigate();

  const { mutate: mutatePutLogout } = usePutLogout();

  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const handleLogout = () => {
    handleOpenModal(
      <ConfirmModal
        content="로그아웃 하시겠어요?"
        confirmLabel="로그아웃"
        cancelLabel="취소"
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleKaKaoLogout}
      />
    );
  };

  const handleKaKaoLogout = () => {
    mutatePutLogout(undefined, {
      onSuccess: () => {
        handleCloseModal();
        sessionStorage.clear();
        navigate("/");
      },
      onError: (error) => {
        handleCloseModal();
        addToast({ content: "로그아웃에 실패했습니다. 다시 시도해주세요." });
        console.error("로그아웃 API 실패:", error);
      },
    });
  };
  return (
    <Button variant="underline" onClick={handleLogout} className={className}>
      로그아웃
    </Button>
  );
};

export default KakaoLogout;
