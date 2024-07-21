import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetKakaoInfo, useGetUser } from "services/user";

const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get("code");
  const [sessionId, setSessionId] = useState("");
  const { data: kakaoData, error: kakaoError } = useGetKakaoInfo(code || "");
  const { data: user, error: userError } = useGetUser(sessionId || "");

  useEffect(() => {
    if (kakaoData) {
      sessionStorage.setItem("id", JSON.stringify(kakaoData.id));
      sessionStorage.setItem("email", JSON.stringify(kakaoData.email));
      setSessionId(kakaoData.id.toString());
    }

    if (kakaoError) {
      console.error(kakaoError);
      navigate("/");
    }
  }, [kakaoData, kakaoError]);

  // storage 이벤트 리스너를 등록하여 sessionId를 업데이트
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "id") {
        setSessionId(event.newValue || "");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (user?.role) {
      navigate("/main");
    }
    if (userError) {
      navigate("/signup");
    }
  }, [sessionId, user, userError]);

  // TODO: Spinner 추가?
  return <div>login</div>;
};

export default Auth;
