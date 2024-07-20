import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as S from "./Layout.styled";
import { Footer } from "./footer";

const Layout = () => {
  const location = useLocation();
  // TODO: 로그인, 회원가입, 채팅, Auth - Footer X
  const hideFooterPath = [
    "/",
    "/signup",
    "/meeting",
    "/myProfile",
    "/glint/auth/kakao/callback",
  ];

  const shouldHideFooter = hideFooterPath.includes(location.pathname);

  return (
    <S.Layout>
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </S.Layout>
  );
};

export default Layout;
