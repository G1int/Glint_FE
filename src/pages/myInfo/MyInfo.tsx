import { Button, Header, KakaoLogout, Profile, Toggle } from "components";
import * as S from "./MyInfo.styled";
import Img from "assets/images/img_01.jpg";
import {
  alarmTitle,
  AuthBadgeIcon,
  cutoffTitle,
  FriendsManageIcon,
  MyProfileIcon,
} from "assets";
import React from "react";

// TODO : 임시 데이터
const info = {
  location: "서울",
  company: "신한은행",
  job: "은행원",
};

const MyInfo = () => {
  return (
    <>
      <Header css={S.header}>내정보</Header>
      <S.Info>
        {/* TODO: img 임의로 넣어놈 */}
        <Profile name="룰루랄라" age="29" img={Img} info={info} />
      </S.Info>
      <S.Line />
      <S.ManageButtonWrapper>
        <Button css={S.manageButton} variant="icon">
          <MyProfileIcon css={S.icon} />내 프로필
        </Button>
        <Button css={S.manageButton} variant="icon">
          <AuthBadgeIcon css={S.icon} />
          인증관리
        </Button>
        <Button css={S.manageButton} variant="icon">
          <FriendsManageIcon css={S.icon} />
          친구관리
        </Button>
      </S.ManageButtonWrapper>
      <S.MainTitle>아는사람 만나지 않기</S.MainTitle>
      {cutoffTitle.map((title, idx) => (
        <React.Fragment key={idx}>
          <S.ToggleContent>
            {title}
            <Toggle content="현재 개발중인 기능이에요. 조금만 기다려주세요:)" />
          </S.ToggleContent>
          {idx < cutoffTitle.length - 1 && <S.Line />}
        </React.Fragment>
      ))}
      <S.MainTitle>알림</S.MainTitle>
      {alarmTitle.map((title, idx) => (
        <React.Fragment key={idx}>
          <S.ToggleContent>
            {title}
            <Toggle content="현재 개발중인 기능이에요. 조금만 기다려주세요:)" />
          </S.ToggleContent>
          {idx < alarmTitle.length - 1 && <S.Line />}
        </React.Fragment>
      ))}
      <S.OutButtonWrapper>
        <KakaoLogout css={S.outButton} />
        <Button variant="underline" css={S.outButton}>
          회원탈퇴
        </Button>
      </S.OutButtonWrapper>
    </>
  );
};

export default MyInfo;
