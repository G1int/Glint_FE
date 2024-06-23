import * as S from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "sm" | "lg";
  // disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, size, onClick }: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.ButtonContent className={`${size}`} onClick={onClick}>
        {children}
      </S.ButtonContent>
    </S.ButtonWrapper>
  );
};

export default Button;
