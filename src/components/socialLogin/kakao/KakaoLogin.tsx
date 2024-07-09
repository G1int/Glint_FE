import { KakaoLoginIcon } from "assets";
import { KAKAO_AUTH_URL } from "config";

const KakaoLogin = () => {
  const link: string = KAKAO_AUTH_URL;

  const handleLogin = () => {
    window.location.href = link;
  };

  return (
    <button>
      <KakaoLoginIcon onClick={handleLogin} />
    </button>
  );
};

export default KakaoLogin;
