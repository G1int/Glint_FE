import axios from "axios";
import { Button } from "components/buttons";
import { ConfirmModal } from "components/modal";
import { useModal } from "hooks";
import { useNavigate } from "react-router-dom";

interface KakaoLogoutProps {
  className?: string;
}

const KakaoLogout = ({ className }: KakaoLogoutProps) => {
  const accessToken = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { handleOpenModal, handleCloseModal } = useModal();

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
    axios
      .post(
        "https://kapi.kakao.com/v1/user/unlink",
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        handleCloseModal();
        sessionStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        handleCloseModal();
        console.error(err);
        // 이미 만료된 토큰일 경우
        if (err.response.data.code === -401) {
          navigate("/");
        }
      });
  };
  return (
    <Button variant="underline" onClick={handleLogout} className={className}>
      로그아웃
    </Button>
  );
};

export default KakaoLogout;
