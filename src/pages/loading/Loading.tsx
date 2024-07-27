import { Spinner } from "components";
import * as S from "./Loading.styled";

const Loading = () => {
  return (
    <S.LoadingPage>
      <S.LoadingWrapper>
        <Spinner />
        잠시만 기다려 주세요.
      </S.LoadingWrapper>
    </S.LoadingPage>
  );
};

export default Loading;
