import { useState } from "react";
import * as S from "./Badge.styled";

interface BadgeProps {
  children?: React.ReactNode;
  size?: "sm" | "lg";
  onClick?: () => void;
  isClickable?: boolean;
  disabled?: boolean;
  color?: string;
}

const Badge = ({ children, size, disabled, color }: BadgeProps) => {
  const [isClickable, setIsClickable] = useState(false);

  const handleClick = () => {
    setIsClickable(!isClickable);
  };

  return (
    <S.Badge
      size={size}
      isClickable={isClickable}
      onClick={handleClick}
      disabled={disabled}
      color={color}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
