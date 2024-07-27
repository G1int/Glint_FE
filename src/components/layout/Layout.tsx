import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as S from "./Layout.styled";
import { Footer } from "./footer";

const footerPathPatterns = [
  /^\/main$/,
  /^\/search$/,
  /^\/myMeeting$/,
  /^\/myInfo$/,
];
const Layout = () => {
  const location = useLocation();

  const showFooter = footerPathPatterns.some((pattern) =>
    pattern.test(location.pathname)
  );

  return (
    <S.Layout>
      <Outlet />
      {showFooter && <Footer />}
    </S.Layout>
  );
};

export default Layout;
