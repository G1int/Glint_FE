import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as S from "./Layout.styled";
import { Footer } from "./footer";

// TODO: 로그인, 회원가입, 채팅, Auth - Footer X
const hideFooterPathPatterns = [
  /^\/$/,
  /^\/signup$/,
  /^\/meeting$/,
  /^\/myProfile$/,
  /^\/glint\/auth\/kakao\/callback$/,
  /^\/createRoom$/,
  /^\/meeting\/\d+$/, // 예시: /meeting/123 처럼 숫자로 된 ID를 포함한 경로
];
const Layout = () => {
  const location = useLocation();

  const shouldHideFooter = hideFooterPathPatterns.some((pattern) =>
    pattern.test(location.pathname)
  );

  return (
    <S.Layout>
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </S.Layout>
  );
};

export default Layout;
