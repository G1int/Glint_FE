import { Button } from "components/buttons";
import * as S from "./Footer.styled";
import { Home, MyInfo, MyMeeting, Search } from "assets";
import { useState } from "react";

const Footer = () => {
  const [isSelected, setIsSelected] = useState<string>("홈");

  const handleClickFooter = (text: string) => {
    setIsSelected(text);
  };

  const footerArr = [
    { icon: <Home />, text: "홈" },
    { icon: <Search />, text: "검색" },
    {
      icon: <MyMeeting />,
      text: "내미팅",
    },
    { icon: <MyInfo />, text: "내정보" },
  ];

  return (
    <S.Footer>
      {footerArr.map((item) => (
        <Button
          css={S.button}
          key={item.text}
          onClick={() => handleClickFooter(item.text)}
        >
          <S.ButtonWrapper>
            <S.IconWrapper
              isSelected={isSelected === item.text}
              text={item.text}
            >
              {item.icon}
            </S.IconWrapper>
            <S.Text isSelected={isSelected === item.text}>{item.text}</S.Text>
          </S.ButtonWrapper>
        </Button>
      ))}
    </S.Footer>
  );
};

export default Footer;
