import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as S from "./Layout.styled";
import { Footer } from "./footer";

const Layout = () => {
  const location = useLocation();
  // TODO: 로그인, 회원가입, 채팅 - Footer X
  const hideFooterPath = ["/", "/signup", "/meeting"];

  const shouldHideFooter = hideFooterPath.includes(location.pathname);

  return (
    <S.Layout>
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </S.Layout>
  );
};

export default Layout;
