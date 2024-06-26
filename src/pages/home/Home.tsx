import React from "react";

import { Badge, Button, Input, Modal } from "components";
import { useModal, useToast } from "hooks";

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();

  const toastContext = {
    content: "토스트 테스트중",
  };

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
      <Badge size="sm" disabled>
        Badge
      </Badge>
      <Badge size="sm" color={"red"}>
        Click Badge
      </Badge>
      <Modal />
    </>
  );
};

export default Home;
