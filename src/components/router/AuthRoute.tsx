import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const sessionId = sessionStorage.getItem("id");

  return sessionId ? <Outlet /> : <Navigate to={"/"} />;
};

export default AuthRoute;
