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
          <Route index element={<P.Login />} />
          <Route path="/signup" element={<P.Signup />} />
          <Route path="/glint/auth/kakao/callback" element={<P.Auth />} />
          // TODO: 둘러보기 미적용
          <Route element={<AuthRoute />}>
            <Route path="/main" element={<P.Main />} />
            <Route path="/search" element={<P.Search />} />
            <Route path="/myInfo" element={<P.MyInfo />} />
            <Route path="/myProfile" element={<P.MyProfile />} />
            <Route path="/meeting/:meetingId" element={<P.Meeting />} />
            <Route path="/createRoom" element={<P.CreateRoom />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
