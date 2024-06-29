import React from "react";

import { Button, Carousel, Input, Modal, Toggle } from "components";
import { useModal, useToast } from "hooks";

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
    </>
  );
};

export default Home;
