import { Carousel, KakaoLogin } from "components";
import * as S from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { carouselData } from "./CarouselData";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Login>
      <Carousel info={carouselData} />
      <S.ButtonContainer>
        <KakaoLogin />
        <S.Text onClick={() => navigate("/home")}>둘러보기</S.Text>
      </S.ButtonContainer>
    </S.Login>
  );
};
export default Login;
