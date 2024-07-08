import { Carousel, KakaoLogin } from "components";
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
        // TODO: navigate 수정
        <S.Text onClick={() => navigate("/")}>둘러보기</S.Text>
      </S.ButtonContainer>
    </S.Login>
  );
};
export default Login;
