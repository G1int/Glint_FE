import React from "react";

import * as S from "./Input.styled";
import { ArrowIcon } from "assets";

const Input = () => {
  return (
    <>
      <S.Input />
      <ArrowIcon css={S.icon} />
    </>
  );
};

export default Input;
