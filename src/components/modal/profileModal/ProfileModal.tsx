import { Badge, BaseModal, Button } from "components";
import * as S from "./ProfileModal.styled";
import { CloseIcon, CompanyIcon, ModalRectangleIcon, SchoolIcon } from "assets";
import { useNavigate } from "react-router-dom";

interface ProfileModalProps {
  className?: string;
  img?: string;
  name?: string;
  age?: string;
  work?: string | null;
  university?: string | null;
  clickUserId?: string;
  introduceInfo?: {
    introduce: string | null;
    basicInfo: (string | null)[];
    keywords: string[];
  };
  handleCloseClick?: () => void;
}

const ProfileModal = ({
  className,
  introduceInfo,
  img,
  name,
  age,
  work,
  university,
  clickUserId,
  handleCloseClick,
}: ProfileModalProps) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    handleCloseClick && handleCloseClick();
    navigate("/myProfile");
  };

  return (
    <BaseModal className={className} css={S.bottomModal}>
      <S.StaticContainer>
        <ModalRectangleIcon css={S.rectangleIcon} />
        <CloseIcon css={S.closeIcon} onClick={handleCloseClick} />
      </S.StaticContainer>
      <S.ScrollContainer>
        <S.ImageContainer>
          {img && (
            <>
              <S.Img src={img} alt="profile img" />
              <S.GradientOverlay />
            </>
          )}
          {name && age && (
            <S.MainInfoContent>
              <span>
                {name} ({age})
              </span>
              <S.InfoContent>
                {work && (
                  <>
                    <CompanyIcon />
                    <span>{work}</span>
                  </>
                )}
                {university && (
                  <>
                    <SchoolIcon />
                    <span>{university}</span>
                  </>
                )}
              </S.InfoContent>
            </S.MainInfoContent>
          )}
        </S.ImageContainer>
        {introduceInfo && (
          <S.ContentWrapper>
            <S.InfoWrapper>
              <S.Title>자기소개</S.Title>
              <S.IntroduceContent>
                {introduceInfo.introduce ? (
                  introduceInfo.introduce
                ) : (
                  <S.NoContent>입력 내용이 없어요</S.NoContent>
                )}
              </S.IntroduceContent>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Title>기본정보</S.Title>
              <S.IntroduceContent>
                {introduceInfo.basicInfo.length > 0 ? (
                  introduceInfo.basicInfo.map(
                    (item, index) =>
                      item && (
                        <Badge
                          key={index}
                          css={S.badge}
                          label={`#${item}`}
                          variant="mdWhite"
                        />
                      )
                  )
                ) : (
                  <S.NoContent>입력 내용이 없어요</S.NoContent>
                )}
              </S.IntroduceContent>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Title>나를 표현하는 키워드</S.Title>
              <S.IntroduceContent>
                {introduceInfo.keywords.length > 0 ? (
                  introduceInfo.keywords.map((item, index) => (
                    <Badge
                      key={index}
                      css={S.badge}
                      label={`#${item}`}
                      variant="mdWhite"
                    />
                  ))
                ) : (
                  <S.NoContent>입력 내용이 없어요</S.NoContent>
                )}
              </S.IntroduceContent>
            </S.InfoWrapper>
          </S.ContentWrapper>
        )}
        {!clickUserId && (
          <S.ButtonWrapper>
            <Button
              variant="lgPink"
              onClick={handleProfile}
              css={S.modifyButton}
            >
              프로필 수정
            </Button>
          </S.ButtonWrapper>
        )}
      </S.ScrollContainer>
    </BaseModal>
  );
};

export default ProfileModal;
