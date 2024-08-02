import React from "react";
import { useNavigate } from "react-router-dom";

import { WriteIcon, BackIcon, OutIcon, ShareIcon } from "assets";
import * as S from "./BackLayout.styled";

interface BackLayoutProps {
  className?: string;
  title?: string;
  isBack?: boolean;
  isMeeting?: boolean;
  isOwner?: boolean;
  isAlert?: boolean; //TODO: 알림 아이콘으로 추가 예정
  hasTopContent?: boolean;
  children: React.ReactNode;
  handleClickBack?: () => void;
  handleClickEdit?: () => void;
  handleClickExit?: () => void;
  handleClickShare?: () => void;
}

const BackLayout = ({
  className,
  title,
  isBack,
  isMeeting,
  isOwner,
  isAlert,
  hasTopContent,
  children,
  handleClickEdit,
  handleClickBack,
  handleClickExit,
  handleClickShare,
}: BackLayoutProps) => {
  const navigate = useNavigate();

  const onClickBack = (): void => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <S.BackLayout className={className}>
      <S.Header>
        <S.RightHeaderContainer>
          {isBack && (
            <button onClick={handleClickBack ?? onClickBack}>
              {/* TODO: button 컴포넌트는 컬러로 인해 사용이 불가능하여 임시로 button 사용 추후 수정 필요 */}
              <BackIcon />
            </button>
          )}

          {title && <S.Title>{title}</S.Title>}
        </S.RightHeaderContainer>
        {isMeeting && (
          <S.LeftHeaderContainer>
            <button onClick={handleClickShare}>
              <ShareIcon />
            </button>
            {isOwner && (
              <button onClick={handleClickEdit}>
                <WriteIcon />
              </button>
            )}
            <button onClick={handleClickExit}>
              <OutIcon />
            </button>
          </S.LeftHeaderContainer>
        )}
      </S.Header>
      <S.Context hasTopContent={hasTopContent}>{children}</S.Context>
    </S.BackLayout>
  );
};

export default BackLayout;
