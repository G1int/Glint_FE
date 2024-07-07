import { KakaoLoginIcon } from "assets";
import { KAKAO_AUTH_URL } from "config";
import { KakaoLoginButton } from "./KakaoLogin.styled";

const KakaoLogin = () => {
  const link: string = KAKAO_AUTH_URL;

  const handleLogin = () => {
    window.location.href = link;
  };

  return (
    <KakaoLoginButton>
      <KakaoLoginIcon onClick={handleLogin} />
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
