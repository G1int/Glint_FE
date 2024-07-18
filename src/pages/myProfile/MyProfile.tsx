import Img from "assets/images/img_01.jpg";
import * as S from "./MyProfile.styled";
import { LockIcon, profileSelectData, SmallChevronRightIcon } from "assets";
import { Button, Dropdown, LocationModal, Tag, Textarea } from "components";
import { useModal } from "hooks";
import { useState } from "react";

const MyProfile = () => {
  const { handleOpenModal, handleCloseModal } = useModal();
  // TODO: 예시코드
  const [location, setLocation] = useState<string[]>([]);
  const locationStr = location.join();

  const handleConfirmLocation = (list: string[]) => {
    setLocation(list);
    handleCloseModal();
  };

  const handleLocation = () => {
    return handleOpenModal(
      <LocationModal
        title="사는곳이 어디세요?"
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleConfirmLocation}
      />
    );
  };

  return (
    <>
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
            <Dropdown options={item.options} />
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
          <Tag />
        </S.InputContainer>
        <S.Line />
        <S.InputContainer>
          <S.Title>자기소개</S.Title>
          <Textarea
            // TODO: 예시코드
            handleChange={(e) => console.log(e.target.value)}
            placeholder={`현재 하는 일이나, 꿈, 계획, 목표,
취미생활, 상대방에게 바라는 점 등을 자유롭게
작성해주세요.`}
          />
        </S.InputContainer>
        <S.ButtonWrapper>
          <Button variant="lgPink">저장</Button>
        </S.ButtonWrapper>
      </S.Content>
    </>
  );
};

export default MyProfile;
