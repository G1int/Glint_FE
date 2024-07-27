import { Error404ICon } from "assets";
import * as S from "./Error404.styled";

const Error404 = () => {
  return (
    <S.Layout>
      <S.IconWrapper>
        <Error404ICon />
        원하시는 페이지를 찾을 수 없어요.
      </S.IconWrapper>
    </S.Layout>
  );
};

export default Error404;
