import * as S from "./Button.styled";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "sm" | "lg"; // TODO: 디자인 시스템에 따라 수정 예정
  // disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, size, onClick }: ButtonProps) => {
  return (
    <S.Button size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
