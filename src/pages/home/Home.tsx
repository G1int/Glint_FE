import React from "react";

import { useToast } from "hooks";

const Home = () => {
  const { addToast } = useToast();

  const toastContext = {
    content: "토스트 테스트중",
  };

  return (
    <div>
      home
      <button onClick={() => addToast(toastContext)}>toast 테스트</button>
    </div>
  );
};

export default Home;
