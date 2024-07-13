import { getKakaoInfo } from "apis/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  // 카카오 로그인 : 토큰 발급
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    if (code) {
      getKakaoInfo(code)
        .then((res) => {
          sessionStorage.setItem("id", JSON.stringify(res.id));
          sessionStorage.setItem("email", JSON.stringify(res.email));

          navigate("/signup");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  // TODO: Spinner 추가?
  return <div>login</div>;
};

export default Auth;
