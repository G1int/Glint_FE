import { BackLayout } from "components";
import React, { useState } from "react";
import {
  SignupBirth,
  SignupGender,
  SignupHeight,
  SignupNickname,
  SignupProfile,
} from "./contatiners";

const Signup = () => {
  const [page, setPage] = useState(0);

  const renderPage = (page: number) => {
    switch (page) {
      case 0:
        return <SignupNickname />;
      case 1:
        return <SignupGender />;
      case 2:
        return <SignupBirth />;
      case 3:
        return <SignupHeight />;
      case 4:
        return <SignupProfile />;
    }
  };

  const handleClickNextButton = (): void => {
    setPage(+1);
  };

  return (
    <BackLayout>
      <div>
        <div>progressbar</div>
        {renderPage(page)}
      </div>
      <button onClick={handleClickNextButton}>다음</button>
    </BackLayout>
  );
};

export default Signup;
