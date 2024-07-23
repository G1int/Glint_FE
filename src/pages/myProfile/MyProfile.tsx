import * as S from "./MyProfile.styled";
import { LockIcon, SELECT_DATA, SmallChevronRightIcon } from "assets";
import {
  Button,
  ConfirmModal,
  Dropdown,
  LocationModal,
  Tag,
  Textarea,
} from "components";
import { useModal, useToast, useUserInfo } from "hooks";
import { usePutProfile } from "services";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState, updatedProfileSelector, userIdSelector } from "atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PutProfileQuery } from "types";

const MyProfile = () => {
  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();
  const { userDetail, userProfile } = useUserInfo();
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdSelector);
  const { mutate: mutatePutProfile } = usePutProfile(userId!);
  const [changeProfile, setChangeProfile] = useRecoilState(profileState);
  const updatedProfile = useRecoilValue(updatedProfileSelector);

  // TODO: selectedWork, selectedUniversity 추가 해야함.
  const selectedLocation =
    changeProfile.locationState || changeProfile.locationCity
      ? `${changeProfile.locationState ?? ""} ${
          changeProfile.locationCity ?? ""
        }`
      : `${userProfile?.location?.locationState ?? ""} ${
          userProfile?.location?.locationCity ?? ""
        }`;

  const handleLocation = () => {
    return handleOpenModal(
      <LocationModal
        title="사는곳이 어디세요?"
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleConfirmLocation}
        maxLength={0}
      />
    );
  };

  const handleConfirmLocation = (list: string[]) => {
    if (list.length < 2) {
      // location City 선택 안했을 때 에러남
      addToast({ content: "시/군/구도 선택해주세요." });
    } else {
      setChangeProfile((prevProfile) => ({
        ...prevProfile,
        locationState: list[0] || "",
        locationCity: list[1] || "",
      }));
      handleCloseModal();
    }
  };

  const handleSaveProfile = (updatedProfile: PutProfileQuery) => {
    mutatePutProfile(updatedProfile, {
      onSuccess: () => {
        addToast({ content: "프로필이 저장됐어요." });
        navigate("/myInfo");
      },
      onError: () => {
        // TODO: 문구 체크
        addToast({
          content: "프로필 저장에 문제가 발생했습니다. 다시 시도해주세요.",
        });
      },
    });
  };

  const handleChange = (key: string, value: string | string[]) => {
    setChangeProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  // 뒤로가기 처리
  const handleBackSave = () => {
    setChangeProfile((prevProfile) => {
      const updatedProfile = {
        ...prevProfile,
      };
      handleSaveProfile(updatedProfile);
      return updatedProfile;
    });
    handleCloseModal();
  };

  const handleBackClose = () => {
    handleCloseModal();
    history.pushState(null, "", "");
  };

  useEffect(() => {
    history.pushState(null, "", "");

    const handleClickBrowseBack = () => {
      handleOpenModal(
        <ConfirmModal
          content={
            <>
              이대로 나가면 작성한 내용이
              <br />
              저장되지 않아요. 저장할까요?
            </>
          }
          confirmLabel="저장"
          cancelLabel="취소"
          handleCloseClick={handleBackClose}
          handleConfirmClick={handleBackSave}
        />
      );
    };

    window.addEventListener("popstate", handleClickBrowseBack);

    return () => {
      window.removeEventListener("popstate", handleClickBrowseBack);
    };
  }, []);

  return (
    <S.Content>
      <S.Img src={userDetail?.profileImage} alt="profile img" />
      <S.Container>
        <S.Name>
          {userDetail?.nickname} ({userDetail?.age})
        </S.Name>
        <LockIcon css={S.rightIcon} />
      </S.Container>
      <S.Line />
      <S.Container>
        <S.InfoTitle>회사/학교</S.InfoTitle>
        <Button variant="icon" css={S.rightIcon}>
          <SmallChevronRightIcon />
        </Button>
      </S.Container>
      <S.LineTitle>기본정보</S.LineTitle>
      <S.Container css={S.line}>
        <S.InfoTitle>지역</S.InfoTitle>
        <S.Value>{selectedLocation}</S.Value>
        <Button variant="icon" css={S.rightIcon} onClick={handleLocation}>
          <SmallChevronRightIcon />
        </Button>
      </S.Container>
      <S.Container>
        <S.InfoTitle>키</S.InfoTitle>
        <S.Value>{userDetail?.height}</S.Value>
        <LockIcon css={S.rightIcon} />
      </S.Container>
      {SELECT_DATA.map((item, index) => (
        <S.DropdownContainer key={index}>
          <S.DropdownTitle>{item.title}</S.DropdownTitle>
          <Dropdown
            options={item.options}
            handleChange={(selectedLabel) => {
              const key =
                item.title === "종교"
                  ? "religionId"
                  : item.title === "흡연"
                  ? "smokingId"
                  : "drinkingId";
              handleChange(key, selectedLabel);
            }}
            selectedKey={
              item.title === "종교"
                ? String(userProfile?.religion?.religionId)
                : item.title === "흡연"
                ? String(userProfile?.smoking?.smokingId)
                : String(userProfile?.drinking?.drinkingId)
            }
          />
        </S.DropdownContainer>
      ))}
      <S.Line />
      <S.InputContainer>
        <S.TitleWrapper>
          <S.Title>나를 표현하는 키워드</S.Title>
          <S.Description>
            직업, 성격, MBTI 등 키워드로 자신을 표현하세요.
          </S.Description>
        </S.TitleWrapper>
        <Tag
          handleChange={(value) => handleChange("hashtags", value)}
          data={userProfile?.hashtags}
        />
      </S.InputContainer>
      <S.Line />
      <S.InputContainer>
        <S.Title>자기소개</S.Title>
        <Textarea
          handleChange={(e) => handleChange("selfIntroduction", e.target.value)}
          defaultValue={userProfile?.selfIntroduction}
          placeholder={`현재 하는 일이나, 꿈, 계획, 목표,
취미생활, 상대방에게 바라는 점 등을 자유롭게
작성해주세요.`}
        />
      </S.InputContainer>
      <S.ButtonWrapper>
        <Button
          variant="lgPink"
          onClick={() => handleSaveProfile(updatedProfile)}
        >
          저장
        </Button>
      </S.ButtonWrapper>
    </S.Content>
  );
};

export default MyProfile;
