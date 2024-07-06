import * as S from "./Button.styled";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg"; // TODO: 디자인 시스템에 따라 수정 예정
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  size,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
