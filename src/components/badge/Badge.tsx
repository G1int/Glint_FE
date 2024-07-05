import React from "react";

import * as S from "./Badge.styled";

interface BadgeProps {
  label: string;
  isSelected?: boolean;
  handleClick?: () => void;
}

const Badge = ({ label, isSelected, handleClick }: BadgeProps) => {
  return (
    <S.Badge
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
    >
      {label}
    </S.Badge>
  );
};

export default Badge;
