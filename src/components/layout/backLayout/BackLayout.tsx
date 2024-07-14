import React from "react";
import { useNavigate } from "react-router-dom";

import { WriteIcon, BackIcon, OutIcon, ShareIcon } from "assets";
import * as S from "./BackLayout.styled";
import { useToast } from "hooks";

interface BackLayoutProps {
  className?: string;
  title?: string;
  isMeeting?: boolean;
  isOwner?: boolean;
  isAlert?: boolean; //TODO: 알림 아이콘으로 추가 예정
  children: React.ReactNode;
  handleClickBack?: () => void;
  handleClickEdit?: () => void;
}

const BackLayout = ({
  className,
  title,
  isMeeting,
  isOwner,
  isAlert,
  children,
  handleClickEdit,
  handleClickBack,
}: BackLayoutProps) => {
  const navigate = useNavigate();

  const { addToast } = useToast();

  const onClickBack = (): void => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  const handleClickShare = () => {
    addToast({ content: "현재 개발중인 기능이에요. 조금만 기다려주세요:)" });
  };
  const handleClickExit = () => {
    console.log("방나가기 api 연동 예정");
  };

  return (
    <S.BackLayout className={className}>
      <S.Header>
        <S.RightHeaderContainer>
          <button onClick={handleClickBack ?? onClickBack}>
            {/* TODO: button 컴포넌트는 컬러로 인해 사용이 불가능하여 임시로 button 사용 추후 수정 필요 */}
            <BackIcon />
          </button>
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
      <S.Context>{children}</S.Context>
    </S.BackLayout>
  );
};

export default BackLayout;
