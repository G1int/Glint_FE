import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetKakaoInfo } from "services/user";

const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get("code");
  const { data, error } = useGetKakaoInfo(code || "");

  useEffect(() => {
    if (data) {
      sessionStorage.setItem("id", JSON.stringify(data.id));
      sessionStorage.setItem("email", JSON.stringify(data.email));
      navigate("/signup");
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  // TODO: Spinner 추가?
  return <div>login</div>;
};

export default Auth;
