import { Badge, BaseModal, Button } from "components";
import * as S from "./ProfileModal.styled";
import {
  CloseIcon,
  CompanyIcon,
  ProfileRectangleIcon,
  SchoolIcon,
} from "assets";
import { useNavigate } from "react-router-dom";
import { useModal } from "hooks";

interface ProfileModalProps {
  className?: string;
  img?: string;
  name?: string;
  age?: string;
  company?: string;
  school?: string;
  introduceInfo?: {
    introduce: string;
    basicInfo: string[];
    keywords: string[];
  };
}

const ProfileModal = ({
  className,
  introduceInfo,
  img,
  name,
  age,
  company,
  school,
}: ProfileModalProps) => {
  const navigate = useNavigate();
  const { handleCloseModal } = useModal();
  const handleProfile = () => {
    handleCloseModal();
    navigate("/myProfile");
  };
  return (
    <BaseModal className={className} css={S.bottomModal}>
      {img && name && age && (
        <>
          <ProfileRectangleIcon css={S.rectangleIcon} />
          <CloseIcon css={S.closeIcon} onClick={handleCloseModal} />
          <S.Img src={img} alt="profile img" />
          <S.GradientOverlay />
          <S.MainInfoContent>
            <span>
              {name} ({age})
            </span>
            <S.InfoContent>
              {company && (
                <>
                  <CompanyIcon />
                  <span>{company}</span>
                </>
              )}
              {school && (
                <>
                  <SchoolIcon />
                  <span>{school}</span>
                </>
              )}
            </S.InfoContent>
          </S.MainInfoContent>
          {/* <S.Title>자기소개</S.Title>
          <S.IntroduceContent>{introduceInfo?.introduce}</S.IntroduceContent>
          <S.Title>기본정보</S.Title>
          <S.IntroduceContent>
            {introduceInfo?.basicInfo.map((item, index) => (
              <Badge key={index}>#{item}</Badge>
            ))}
          </S.IntroduceContent>
          <S.Title>나를 표현하는 키워드</S.Title>
          <S.IntroduceContent>
            {introduceInfo?.keywords.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </S.IntroduceContent> */}
          <S.ButtonWrapper>
            <Button
              variant="lgPink"
              onClick={handleProfile}
              css={S.modifyButton}
            >
              프로필 수정
            </Button>
          </S.ButtonWrapper>
        </>
      )}
    </BaseModal>
  );
};

export default ProfileModal;
