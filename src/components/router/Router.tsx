import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "components";
import * as P from "pages";
import AuthRoute from "./AuthRoute";

interface RouterProps {
  children?: React.ReactNode; //TODO: Modal, Toast 컴포넌트 추가 이후 필수값으로 변경 필요
}

const Router = ({ children }: RouterProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {/* NOTE: 임시 코드 */}
        <Route element={<Layout />}>
          <Route index path="/signup" element={<P.Signup />} />
          <Route path="/glint/auth/kakao/callback" element={<P.Auth />} />
          <Route element={<AuthRoute />}>
            <Route path="/" element={<P.Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
