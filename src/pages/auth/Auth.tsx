import axios from "axios";
import { KAKAO_BASE_URL, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  // 카카오 로그인 : 토큰 발급
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const GRANT_TYPE = "authorization_code";
    const data = {
      grant_type: GRANT_TYPE,
      client_id: KAKAO_CLIENT_ID,
      redirect_uri: KAKAO_REDIRECT_URI,
      code: code,
    };

    axios
      .post(KAKAO_BASE_URL, data, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log("kakao login response", res.data);
        if (res) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(res.data.access_token)
          );
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.refresh_token)
          );
          navigate("/");
        }
      });
  }, []);

  return <div>login</div>;
};

export default Auth;
