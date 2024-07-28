import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetKakaoInfo } from "services/user";
import * as P from "pages";

const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get("code");
  const { data: kakaoData, error: kakaoError } = useGetKakaoInfo(code!);

  useEffect(() => {
    if (kakaoData) {
      sessionStorage.setItem("id", JSON.stringify(kakaoData.id));
      sessionStorage.setItem("email", JSON.stringify(kakaoData.email));
    }

    if (kakaoError) {
      console.error(kakaoError);
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
