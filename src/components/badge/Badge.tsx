import * as S from "./Badge.styled";

interface BadgeProps {
  children?: React.ReactNode;
  size?: "sm" | "lg";
  onClick?: () => void;
  isClickable?: boolean;
  disabled?: boolean;
  color?: string;
}

const Badge = ({
  children,
  size,
  color,
  disabled,
  onClick,
  isClickable,
}: BadgeProps) => {
  const handleClick = () => {
    if (isClickable && onClick) {
      onClick();
    }
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
