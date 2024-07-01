import { Badge, BaseModal } from "components";
import * as S from "./ProfileModal.styled";

interface ProfileModalProps {
  img?: string;
  name?: string;
  age?: string;
  info?: { location: string; company: string; job: string };
  introduceInfo?: {
    introduce: string;
    basicInfo: string[];
    keywords: string[];
  };
}

const ProfileModal = ({
  introduceInfo,
  img,
  name,
  age,
  info,
}: ProfileModalProps) => {
  return (
    <BaseModal mode={"bottom"}>
      <S.ModalBody mode={img ? "img" : "text"}>
        {img && info && (
          <>
            <S.Img src={img} alt="profile img" />
            <S.MainInfoContent>
              <span>{name}</span>
              <span>{age}세</span>
            </S.MainInfoContent>
            <S.InfoContent>
              <span>{info.location}</span>
              <span>{info.company}</span>
              <span>{info.job}</span>
            </S.InfoContent>
          </>
        )}
        {introduceInfo && (
          <>
            <S.Title>자기소개</S.Title>
            <S.IntroduceContent>{introduceInfo?.introduce}</S.IntroduceContent>
            <S.Title>기본정보</S.Title>
            <S.IntroduceContent>
              {introduceInfo.basicInfo.map((item, index) => (
                <Badge key={index} size="sm" disabled>
                  {item}
                </Badge>
              ))}
            </S.IntroduceContent>
            <S.Title>나를 표현하는 키워드</S.Title>
            <S.IntroduceContent>
              {introduceInfo.keywords.map((item, index) => (
                <Badge key={index} disabled>
                  {item}
                </Badge>
              ))}
            </S.IntroduceContent>
          </>
        )}
      </S.ModalBody>
    </BaseModal>
  );
};

export default ProfileModal;
