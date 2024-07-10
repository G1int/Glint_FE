import { Button, KakaoLogout, Profile, Toggle } from "components";
import * as S from "./MyInfo.styled";
import Img from "assets/images/img_01.jpg";
import { AuthBadgeIcon, FriendsManageIcon, MyProfileIcon } from "assets";

const info = {
  location: "서울",
  company: "신한은행",
  job: "은행원",
};
const cutoff = ["같은 학교 · 직장 차단", "연락처로 지인 차단"];
const alarm = ["채팅 알림 사용", "초대 알림 사용", " 참가 신청 알림 사용"];

const MyInfo = () => {
  return (
    <S.BackLayout>
      <S.Header>내 정보</S.Header>
      <S.Info>
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
      {cutoff.map((title, idx) => (
        <>
          <S.ToggleContent key={idx}>
            {title}
            <Toggle />
          </S.ToggleContent>
          {idx < cutoff.length - 1 && <S.Line />}
        </>
      ))}
      <S.MainTitle>알림</S.MainTitle>
      {alarm.map((title, idx) => (
        <>
          <S.ToggleContent key={idx}>
            {title}
            <Toggle />
          </S.ToggleContent>
          {idx < alarm.length - 1 && <S.Line />}
        </>
      ))}
      <S.OutButtonWrapper>
        <KakaoLogout css={S.outButton} />
        <Button variant="underline" css={S.outButton}>
          회원탈퇴
        </Button>
      </S.OutButtonWrapper>
      <S.Footer />
    </S.BackLayout>
  );
};

export default MyInfo;
