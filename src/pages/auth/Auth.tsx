import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "pages";
import { useGetKakaoInfo } from "services";
import { useToast } from "hooks";

const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;

  const code = params.get("code");

  const { addToast } = useToast();

  const { data: kakaoData, error: kakaoError } = useGetKakaoInfo(code!);

  useEffect(() => {
    if (kakaoData) {
      sessionStorage.setItem("id", JSON.stringify(kakaoData.id));
      sessionStorage.setItem("email", JSON.stringify(kakaoData.email));
    }

    if (kakaoError) {
      console.error("카카오 Callback API 실패:", kakaoError);
      addToast({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
      navigate("/");
    }
  }, [kakaoData, kakaoError]);

  useEffect(() => {
    if (kakaoData) {
      if (kakaoData.isCompleteDetail) {
        navigate("/main");
      } else if (!kakaoData.isCompleteDetail) {
        navigate("/signup");
      }
    }
  }, [kakaoData]);

  return <P.Loading />;
};

export default Auth;
