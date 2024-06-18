import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "pages";

interface RouterProps {
  children?: React.ReactNode; //TODO: Modal, Toast 컴포넌트 추가 이후 필수값으로 변경 필요
}

const Router = ({ children }: RouterProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {/* NOTE: 임시 코드 */}
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
