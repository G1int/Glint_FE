import { useState } from "react";
import * as S from "./Toggle.styled";

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <S.Toggle checked={isToggleOn}>
      <S.Checkbox id="toggle" type="checkbox" onChange={handleToggle} />
    </S.Toggle>
  );
};

export default Toggle;
