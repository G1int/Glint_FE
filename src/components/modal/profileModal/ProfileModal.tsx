import { BaseModal } from "../baseModal";
import * as S from "./ProfileModal.styled";

interface ProfileModalProps {
  content?: React.ReactNode;
  img?: string;
}

const ProfileModal = ({ content, img }: ProfileModalProps) => {
  return (
    <BaseModal mode={"bottom"}>
      <S.ModalBody>{img && <S.Img src={img} alt="profile img" />}</S.ModalBody>
    </BaseModal>
  );
};

export default ProfileModal;
