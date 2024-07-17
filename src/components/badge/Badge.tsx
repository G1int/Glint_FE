import React from "react";

import * as S from "./Badge.styled";

interface BadgeProps {
  children: React.ReactNode;
  isSelected?: boolean;
  variant?: "smPink" | "smNavy";
  handleClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Badge = ({
  children,
  isSelected,
  handleClick,
  variant,
  className,
}: BadgeProps) => {
  return (
    <S.Badge
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
      variant={variant}
      className={className}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
