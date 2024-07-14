import * as S from "./Header.styled";
interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <S.Header className={className}>{children}</S.Header>;
};

export default Header;
