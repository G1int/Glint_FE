import React from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "assets";
import * as S from "./BackLayout.styled";

interface BackLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const BackLayout = ({ className, children }: BackLayoutProps) => {
  const navigate = useNavigate();

  const onClickBack = (): void => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <S.BackLayout className={className}>
      <S.Header>
        {/* TODO: 헤더에 타이틀 들어가는 경우가 있어 스크린 나오면 수정 필요 */}
        <button onClick={onClickBack}>
          {/* TODO: button 컴포넌트는 컬러로 인해 사용이 불가능하여 임시로 button 사용 추후 수정 필요 */}
          <ChevronLeftIcon />
        </button>
      </S.Header>
      <S.Context>{children}</S.Context>
    </S.BackLayout>
  );
};

export default BackLayout;
