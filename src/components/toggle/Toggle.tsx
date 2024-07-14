import { useState } from "react";
import * as S from "./Toggle.styled";
import { useToast } from "hooks";

interface ToggleProps {
  content?: string;
}

const Toggle = ({ content }: ToggleProps) => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const { addToast } = useToast();

  const handleToggle = () => {
    const newToggleState = !isToggleOn;
    setIsToggleOn(newToggleState);

    if (newToggleState) {
      addToast({ content: content });
    }
  };

  return (
    <S.Toggle checked={isToggleOn}>
      <S.Checkbox id="toggle" type="checkbox" onChange={handleToggle} />
    </S.Toggle>
  );
};

export default Toggle;
