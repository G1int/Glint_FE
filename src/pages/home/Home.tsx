import React from "react";

import {
  Button,
  Carousel,
  Input,
  Modal,
  Profile,
  Tab,
  Toggle,
} from "components";
import { useModal, useToast } from "hooks";
import Img from "assets/images/img_01.jpg"; //TODO:임시 저장 이미지
import {
  toastContext,
  carouselData,
  info,
  keywords,
  tabs,
  tabList,
} from "./HomeDummy";

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();

  return (
    <>
      <Carousel info={carouselData} />
      home
      <button onClick={() => addToast(toastContext)}>toast 테스트</button>
      <Input handleChange={() => console.log("hi")} />
      <Button
        size="sm"
        onClick={() =>
          handleOpenModal({ title: "Modal Title", content: "content!" })
        }
      >
        Open
      </Button>
      <Toggle />
      <Modal />
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
