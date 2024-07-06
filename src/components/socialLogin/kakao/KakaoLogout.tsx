import axios from "axios";
import { Button } from "components/buttons";
import { useNavigate } from "react-router-dom";

const KakaoLogout = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "https://kapi.kakao.com/v1/user/unlink",
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        sessionStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        // 이미 만료된 토큰일 경우
        if (err.response.data.code === -401) {
          navigate("/");
        }
      });
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default KakaoLogout;
