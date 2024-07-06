import React from "react";

import * as S from "./ProgressBar.styled";

interface ProgressBarProps {
  filledRange: number;
}

const ProgressBar = ({ filledRange }: ProgressBarProps) => {
  return (
    <S.ProgressBar>
      <S.FilledProgressBar filledRange={filledRange} />
    </S.ProgressBar>
  );
};

export default ProgressBar;
