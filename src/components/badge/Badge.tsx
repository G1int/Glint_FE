import React from "react";

import * as S from "./Badge.styled";

interface BadgeProps {
  label: string;
  isSelected?: boolean;
  variant?: "smPink" | "smNavy";
  handleClick?: (e: React.MouseEvent) => void;
}

const Badge = ({ label, isSelected, handleClick, variant }: BadgeProps) => {
  return (
    <S.Badge
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
      variant={variant}
    >
      {label}
    </S.Badge>
  );
};

export default Badge;
