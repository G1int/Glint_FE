import { Button } from "components/buttons";
import { KAKAO_AUTH_URL } from "config";

const KakaoLogin = () => {
  const link: string = KAKAO_AUTH_URL;

  const handleLogin = () => {
    window.location.href = link;
  };
  return (
    <div>
      <Button onClick={handleLogin}>카카오 로그인</Button>
    </div>
  );
};

export default KakaoLogin;
