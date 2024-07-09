import * as S from "./Button.styled";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "smPink" | "lgPink" | "mdWhite" | "lgWhite" | "underline" | "icon";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  variant,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
