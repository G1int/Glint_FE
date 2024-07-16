import Img from "assets/images/img_01.jpg";
import * as S from "./MyProfile.styled";
import { LockIcon, selectData, SmallChevronRightIcon } from "assets";
import { Button, Dropdown, Input } from "components";

const MyProfile = () => {
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
          <Button variant="icon" css={S.rightIcon}>
            <SmallChevronRightIcon />
          </Button>
        </S.Container>
        <S.Container>
          <S.InfoTitle>키</S.InfoTitle>
          <S.Height>185</S.Height>
          <LockIcon css={S.rightIcon} />
        </S.Container>
        {selectData.map((item, index) => (
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
          {/* TODO: tag input으로 수정*/}
          <Input
            handleChange={(e) => e.target.value}
            placeholder="키워드 입력 후 엔터를 쳐주세요."
          />
        </S.InputContainer>
        <S.Line />
        <S.InputContainer>
          <S.Title>자기소개</S.Title>
          {/* TODO: Input size, css 수정 */}
          <Input
            handleChange={(e) => e.target.value}
            placeholder="키워드 입력 후 엔터를 쳐주세요."
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
