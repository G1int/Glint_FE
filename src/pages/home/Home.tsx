import {
  Button,
  Carousel,
  Input,
  ConfirmModal,
  Profile,
  Toggle,
  ProfileModal,
} from "components";
import { useModal, useToast } from "hooks";
import Img from "assets/images/img_01.jpg"; //TODO:임시 저장 이미지
import Img2 from "assets/images/IMG_4494.jpg"; // TODO: 임시 저장 이미지

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();

  const toastContext = {
    content: "토스트 테스트중",
  };

  const carouselData = [
    {
      id: 1,
      title: "첫번째 타이틀",
      content: "첫번째 요소",
      img: "vite.svg",
    },
    {
      id: 2,
      title: "두번째 타이틀",
      content: "두번째 요소",
      img: "vite.svg",
    },
    {
      id: 3,
      title: "세번째 타이틀",
      content: "세번째 요소",
      img: "vite.svg",
    },
  ];

  const info = { location: "서울", company: "회사", job: "직업" };
  const keywords = ["키", "특징", "특징"];

  const handleOpenConfirmModal = () => {
    handleOpenModal(
      <ConfirmModal content={"test"} confirmLabel={"확인"} mode={"center"} />
    );
  };

  const handleOpenConfirmCancelModal = () => {
    handleOpenModal(
      <ConfirmModal
        content={"test"}
        confirmLabel={"확인"}
        cancelLabel={"취소"}
        mode={"center"}
      />
    );
  };

  const handleOpenBottomModal = () => {
    handleOpenModal(<ProfileModal img={Img2} />);
  };

  return (
    <>
      <Carousel info={carouselData} />
      home
      <button onClick={() => addToast(toastContext)}>toast 테스트</button>
      <Input handleChange={() => console.log("hi")} />
      <Button size="sm" onClick={handleOpenConfirmModal}>
        ConfirmModal
      </Button>
      <Button size="sm" onClick={handleOpenConfirmCancelModal}>
        ConfirmCancelModal
      </Button>
      <Button size="sm" onClick={handleOpenBottomModal}>
        자기소개
      </Button>
      <Toggle />
      <Profile
        name="이름"
        age="16"
        isChangeProfile
        img={Img}
        info={info}
        keywords={keywords}
      />
    </>
  );
};

export default Home;
