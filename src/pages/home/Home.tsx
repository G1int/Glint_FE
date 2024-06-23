import React from "react";

import { Input } from "components";
import { useToast } from "hooks";

const Home = () => {
  const { addToast } = useToast();

  const toastContext = {
    content: "토스트 테스트중",
  };

  return (
    <>
      home
      <button onClick={() => addToast(toastContext)}>toast 테스트</button>
      <Input handleChange={() => console.log("hi")} />
    </>
  );
};

export default Home;
