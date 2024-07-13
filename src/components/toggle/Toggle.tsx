import { useState } from "react";
import * as S from "./Toggle.styled";
import { useToast } from "hooks";

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const { addToast } = useToast();

  const toastContext = {
    content: (
      <>
        현재 개발 중인 기능이에요.
        <br />
        조금만 기다려주세요
      </>
    ),
  };

  const handleToggle = () => {
    const newToggleState = !isToggleOn;
    setIsToggleOn(newToggleState);

    if (newToggleState) {
      addToast(toastContext);
    }
  };

  return (
    <S.Toggle checked={isToggleOn}>
      <S.Checkbox id="toggle" type="checkbox" onChange={handleToggle} />
    </S.Toggle>
  );
};

export default Toggle;
