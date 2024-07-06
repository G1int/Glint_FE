import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./Layout.styled";

const Layout = () => {
  return (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
};

export default Layout;
