import {
  Button,
  ConfirmModal,
  Header,
  KakaoLogout,
  Profile,
  ProfileModal,
  Toggle,
} from "components";
import * as S from "./MyInfo.styled";
import {
  alarmTitle,
  AuthBadgeIcon,
  cutoffTitle,
  FriendsManageIcon,
  MyProfileIcon,
} from "assets";
import { useModal, useToast, useUserInfo } from "hooks";
import { useDeleteUser } from "services";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const navigate = useNavigate();

  const userId = useRecoilValue(userIdSelector);
  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const { userDetail, userProfile } = useUserInfo();
  const { mutate: mutateDeleteUser } = useDeleteUser(userId!);

  const infoData: {
    location?: string;
    work?: string;
    university?: string;
  } = {
    location: `${userProfile?.location?.locationState ?? ""} ${
      userProfile?.location?.locationCity ?? ""
    }`,
    work: userProfile?.work?.workName ?? "",
    university: `${userProfile?.university?.universityName ?? ""} ${
      userProfile?.university?.universityDepartment ?? ""
    }`,
  };

  const handleMyProfile = () => {
    return handleOpenModal(
      <ProfileModal
        img={userDetail?.profileImage}
        name={userDetail?.nickname}
        age={userDetail?.age}
        work={userProfile?.work?.workName ?? null}
        university={
          userProfile?.university
            ? `${userProfile.university.universityName ?? ""} ${
                userProfile.university.universityDepartment ?? ""
              }`
            : null
        }
      />
    );
  };

  const handleWithdrawal = () => {
    handleOpenModal(
      <ConfirmModal
        title="회원 탈퇴를 진행하시겠어요?"
        content={
          <>
            회원 탈퇴 시 계정 복구는 불가능하니
            <br />
            주의해주세요!
          </>
        }
        confirmLabel="회원탈퇴"
        cancelLabel="취소"
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleDeleteUser}
      />
    );
  };

  const handleDeleteUser = () => {
    mutateDeleteUser(undefined, {
      onSuccess: () => {
        handleCloseModal();
        sessionStorage.clear();
        navigate("/");
      },
      onError: (error) => {
        handleCloseModal();
        addToast({ content: "회원탈퇴에 실패했습니다.다시 시도해주세요." });
        console.error("회원탈퇴 API 실패:", error);
      },
    });
  };

  return (
    <>
      <Header css={S.header}>내정보</Header>
      <S.Info>
        <Profile
          name={userDetail?.nickname ?? null}
          age={userDetail?.age ?? null}
          img={userDetail?.profileImage ?? null}
          info={infoData}
        />
      </S.Info>
      <S.Line />
      <S.ManageButtonWrapper>
        <Button css={S.manageButton} variant="icon" onClick={handleMyProfile}>
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
        <S.ToggleContent
          key={idx}
          className={idx === cutoffTitle.length - 1 ? "last" : ""}
        >
          {title}
          <Toggle content="현재 개발중인 기능이에요. 조금만 기다려주세요:)" />
        </S.ToggleContent>
      ))}
      <S.MainTitle>알림</S.MainTitle>
      {alarmTitle.map((title, idx) => (
        <S.ToggleContent
          key={idx}
          className={idx === alarmTitle.length - 1 ? "last" : ""}
        >
          {title}
          <Toggle content="현재 개발중인 기능이에요. 조금만 기다려주세요:)" />
        </S.ToggleContent>
      ))}
      <S.OutButtonWrapper>
        <KakaoLogout css={S.outButton} />
        <Button
          variant="underline"
          css={S.outButton}
          onClick={handleWithdrawal}
        >
          회원탈퇴
        </Button>
      </S.OutButtonWrapper>
    </>
  );
};

export default MyInfo;
