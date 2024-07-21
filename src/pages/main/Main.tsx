import { useState } from "react";
import * as S from "./Main.styled";
import { Button, Header, MeetingCard } from "components";
import { AddIcon, BellIcon, FilterIcon, LogoIcon, mainIconList } from "assets";
import Img from "assets/images/img_01.jpg";
import { useToast } from "hooks";

const Main = () => {
  const { addToast } = useToast();
  // TODO: 예시코드-api연동 후 삭제
  const [meetings, setMeetings] = useState<Array<{ id: number; img: string }>>([
    { id: 1, img: Img },
    { id: 2, img: Img },
    { id: 3, img: Img },
    { id: 4, img: Img },
    { id: 5, img: Img },
    { id: 6, img: Img },
    { id: 7, img: Img },
    { id: 8, img: Img },
    { id: 9, img: Img },
    { id: 10, img: Img },
  ]);

  return (
    <>
      <S.Content>
        <Header css={S.header}>
          <LogoIcon css={S.logoIcon} />
          <S.BellIconWrapper>
            <Button
              variant="icon"
              onClick={() =>
                addToast({
                  content: "현재 개발중인 기능이에요. 조금만 기다려주세요:)",
                })
              }
            >
              <BellIcon />
            </Button>
          </S.BellIconWrapper>
        </Header>
        <S.MainIconContainer>
          {mainIconList.map((item, index) => (
            <S.MainIconWrapper key={index}>
              {item.image}
              {item.text}
            </S.MainIconWrapper>
          ))}
        </S.MainIconContainer>
        <S.TitleWrapper>
          <S.Title>New 미팅</S.Title>
          <FilterIcon />
        </S.TitleWrapper>
        <MeetingCard meetingList={meetings} count={2} />
        <Button variant="icon" css={S.addIcon}>
          <AddIcon />
        </Button>
      </S.Content>
    </>
  );
};

export default Main;
