import React from "react";

import * as S from "./Badge.styled";

interface BadgeProps {
  className?: string;
  isSelected?: boolean;
  variant: "smPink" | "smNavy" | "mdNavy" | "mdWhite";
  label: string;
  icon?: React.ReactNode;
  handleClick?: (e: React.MouseEvent) => void;
}

const Badge = ({
  className,
  label,
  isSelected,
  handleClick,
  variant,
  icon,
}: BadgeProps) => {
  return (
    <S.Badge
      className={className}
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
      variant={variant}
    >
      {label}
      {icon && icon}
    </S.Badge>
  );
};

export default Badge;
