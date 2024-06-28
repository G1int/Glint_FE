import { useState } from "react";
import * as S from "./Toggle.styled";

interface ToggleProps {
  size?: "sm" | "lg";
}

const Toggle = ({ size }: ToggleProps) => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <S.Toggle checked={active} size={size}>
      <input
        id="checkbox"
        type="checkbox"
        checked={active}
        onChange={handleToggle}
      />
    </S.Toggle>
  );
};

export default Toggle;
