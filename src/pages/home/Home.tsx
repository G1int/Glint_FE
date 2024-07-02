import React from "react";

import {
  Button,
  Carousel,
  Input,
  ConfirmModal,
  Profile,
  Toggle,
  ProfileModal,
  Tab,
} from "components";
import { useModal, useToast } from "hooks";
import Img from "assets/images/img_01.jpg"; //TODO:임시 저장 이미지
import Img2 from "assets/images/IMG_4494.jpg"; // TODO: 임시 저장 이미지
import {
  toastContext,
  carouselData,
  info,
  keywords,
  tabs,
  tabList,
  introduceInfo,
} from "./HomeDummy";

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal, handleCloseModal } = useModal();

  const handleOpenConfirmModal = () => {
    handleOpenModal(
      <ConfirmModal
        content="test"
        confirmLabel="확인"
        handleConfirmClick={() => console.log("confirm!")}
        handleCloseClick={handleCloseModal}
      />
    );
  };

  const handleOpenConfirmCancelModal = () => {
    handleOpenModal(
      <ConfirmModal
        content="test"
        confirmLabel="확인"
        cancelLabel="취소"
        handleConfirmClick={() => console.log("confirm!")}
        handleCloseClick={handleCloseModal}
      />
    );
  };

  const handleOpenBottomModal = () => {
    handleOpenModal(
      <ProfileModal img={Img2} name="홍길동" age="20" info={info} />
    );
  };
  const handleOpenBottomModal2 = () => {
    handleOpenModal(
      <ProfileModal introduceInfo={introduceInfo} name="홍길동" age="20" />
    );
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
        Profile Image
      </Button>
      <Button size="sm" onClick={handleOpenBottomModal2}>
        Profile Text
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
      <Tab tabs={tabs} tabList={tabList} />
    </>
  );
};

export default Home;
