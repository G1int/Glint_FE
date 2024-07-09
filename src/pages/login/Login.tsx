import { Button, Carousel, KakaoLogin } from "components";
import * as S from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { glintLandings } from "assets";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Login>
      <Carousel info={glintLandings} />
      <S.ButtonContainer>
        <KakaoLogin />
        {/* TODO: navigate 수정 */}
        <Button variant="underline" onClick={() => navigate("/home")}>
          둘러보기
        </Button>
      </S.ButtonContainer>
    </S.Login>
  );
};
export default Login;
