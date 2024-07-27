import { SpinnerInnerIcon } from "assets";
import * as S from "./Spinner.styled";
import SpinnerOuter from "assets/icons/ic_spinnerOuter.png";

const Spinner = () => {
  return (
    <S.SpinnerWrapper>
      <S.SpinnerOuter src={SpinnerOuter} alt="spinnerOuter" />
      <S.SpinnerInner>
        <SpinnerInnerIcon />
      </S.SpinnerInner>
    </S.SpinnerWrapper>
  );
};

export default Spinner;
