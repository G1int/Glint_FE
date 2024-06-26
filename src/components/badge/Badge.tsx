import { useState } from "react";
import * as S from "./Badge.styled";

interface BadgeProps {
  children?: React.ReactNode;
  size?: "sm" | "lg";
  onClick?: () => void;
  clickable?: boolean;
  disabled?: boolean;
  color?: string;
}

const Badge = ({ children, size, disabled, color }: BadgeProps) => {
  const [clickable, setClickable] = useState(false);

  const handleClick = () => {
    setClickable(!clickable);
  };
  return (
    <S.Badge
      size={size}
      clickable={clickable}
      onClick={handleClick}
      disabled={disabled}
      color={color}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
