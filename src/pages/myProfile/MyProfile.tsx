import Img from "assets/images/img_01.jpg";
import * as S from "./MyProfile.styled";
import { LockIcon, profileSelectData, SmallChevronRightIcon } from "assets";
import { Button, Dropdown, LocationModal, Tag, Textarea } from "components";
import { useModal, useToast } from "hooks";
import { usePutProfile } from "services";
import { useRecoilState } from "recoil";
import { profileState } from "atoms";
import { PutProfileQuery } from "types";

const MyProfile = () => {
  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();
  const userId = sessionStorage.getItem("id");

  const { mutate: mutatePutProfile } = usePutProfile(userId || "");
  const [profile, setProfile] = useRecoilState(profileState);
  const locationStr =
    profile.locationState && profile.locationCity
      ? `${profile.locationState} ${profile.locationCity}`
      : profile.locationState || profile.locationCity;

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
    setProfile((prev) => ({
      ...prev,
      locationState: list[0] || "",
      locationCity: list[1] || "",
    }));
    handleCloseModal();
  };

  const handleSaveProfile = (profile: PutProfileQuery) => {
    mutatePutProfile(profile, {
      onSuccess: () => {
        addToast({ content: "프로필이 저장됐어요." });
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
    setProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  console.log("profile", profile);

  return (
    <S.Content>
      <S.Img src={Img} alt="profile img" />
      <S.Container>
        <S.Name>룰루랄라 (29)</S.Name>
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
        <S.Value>{locationStr}</S.Value>
        <Button variant="icon" css={S.rightIcon} onClick={handleLocation}>
          <SmallChevronRightIcon />
        </Button>
      </S.Container>
      <S.Container>
        <S.InfoTitle>키</S.InfoTitle>
        <S.Value>185</S.Value>
        <LockIcon css={S.rightIcon} />
      </S.Container>
      {profileSelectData.map((item, index) => (
        <S.DropdownContainer key={index}>
          <S.DropdownTitle>{item.title}</S.DropdownTitle>
          <Dropdown
            options={item.options}
            handleChange={(selectedLabel) => {
              const key =
                item.title === "종교"
                  ? "religionName"
                  : item.title === "흡연"
                  ? "smokingName"
                  : "drinkingName";
              handleChange(key, selectedLabel);
            }}
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
        <Tag handleChange={(value) => handleChange("hashtags", value)} />
      </S.InputContainer>
      <S.Line />
      <S.InputContainer>
        <S.Title>자기소개</S.Title>
        <Textarea
          handleChange={(e) => handleChange("selfIntroduction", e.target.value)}
          placeholder={`현재 하는 일이나, 꿈, 계획, 목표,
취미생활, 상대방에게 바라는 점 등을 자유롭게
작성해주세요.`}
        />
      </S.InputContainer>
      <S.ButtonWrapper>
        <Button variant="lgPink" onClick={() => handleSaveProfile(profile)}>
          저장
        </Button>
      </S.ButtonWrapper>
    </S.Content>
  );
};

export default MyProfile;
