import React from "react";

import * as S from "./Badge.styled";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  isSelected?: boolean;
  variant?: "smPink" | "smNavy" | "mdNavy" | "mdWhite";
  handleClick?: () => void;
}

const Badge = ({
  className,
  children,
  isSelected,
  handleClick,
  variant,
}: BadgeProps) => {
  return (
    <S.Badge
      className={className}
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
      variant={variant}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
