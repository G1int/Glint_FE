import { Button } from "components/buttons";
import * as S from "./Footer.styled";
import { HomeIcon, MyInfoIcon, MyMeetingIcon, SearchGrayIcon } from "assets";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickFooter = (path: string) => {
    navigate(path);
  };

  const footerArr = [
    { icon: <HomeIcon />, text: "홈", path: "/main" },
    { icon: <SearchGrayIcon />, text: "검색", path: "/search" },
    {
      icon: <MyMeetingIcon />,
      text: "내미팅",
      path: "/myMeeting",
    },
    { icon: <MyInfoIcon />, text: "내정보", path: "/myInfo" },
  ];

  return (
    <S.Footer>
      {footerArr.map((item) => {
        const selectedItem = item.path === location.pathname;
        return (
          <Button
            css={S.button}
            key={item.text}
            onClick={() => handleClickFooter(item.path)}
          >
            <S.ButtonWrapper>
              <S.IconWrapper isSelected={selectedItem} text={item.text}>
                {item.icon}
              </S.IconWrapper>
              <S.Text isSelected={selectedItem}>{item.text}</S.Text>
            </S.ButtonWrapper>
          </Button>
        );
      })}
    </S.Footer>
  );
};

export default Footer;
