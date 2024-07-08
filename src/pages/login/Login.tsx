import { Button, Carousel, KakaoLogin } from "components";
import * as S from "./Login.styled";
import { carouselData } from "pages/home/HomeDummy";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Login>
      <S.CarouselContainer>
        <Carousel info={carouselData} />
      </S.CarouselContainer>
      <S.ButtonContainer>
        <KakaoLogin />
        <Button variant="underline" onClick={() => navigate("/home")}>
          둘러보기
        </Button>
      </S.ButtonContainer>
    </S.Login>
  );
};
export default Login;
