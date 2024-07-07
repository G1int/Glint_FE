import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const accessToken = sessionStorage.getItem("accessToken");

  return accessToken ? <Outlet /> : <Navigate to={"/"} />;
};

export default AuthRoute;
