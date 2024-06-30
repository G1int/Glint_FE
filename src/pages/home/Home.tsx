import React from "react";

import { Button, Input, Modal, Profile, Toggle } from "components";
import { useModal, useToast } from "hooks";
import Img from "assets/images/img_01.jpg"; //TODO:임시 저장 이미지

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();

  const toastContext = {
    content: "토스트 테스트중",
  };

  const info = { location: "서울", company: "회사", job: "직업" };
  const keywords = ["키", "특징", "특징"];

  return (
    <>
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
      <Profile name="이름" age="16" img={Img} info={info} keywords={keywords} />
    </>
  );
};

export default Home;
