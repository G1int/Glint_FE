import { useState } from "react";
import * as S from "./Main.styled";
import { Badge, Button, Header } from "components";
import {
  AddIcon,
  BellIcon,
  FilterIcon,
  LogoIcon,
  mainIconList,
  MoreIcon,
} from "assets";
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

  const [visibleCount, setVisibleCount] = useState(2);

  const handleMoreMeeting = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, meetings.length));
  };

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
        <S.MeetingWrapper>
          {meetings.slice(0, visibleCount).map((meeting) => (
            <S.MeetingContainer key={meeting.id}>
              <S.BadgeWrapper>
                <Badge label="2:2" variant="smPink" />
                <Badge label="서울 · 인천" variant="smNavy" />
              </S.BadgeWrapper>
              <S.MeetingTitle>
                서울 30대 초 의사 미팅서울 30대 초 의사 미팅서울 30대 초 의사
                미팅서울 30대 초 의사 미팅서울 30대 초 의사 미팅서울 30대 초
                의사 미팅
              </S.MeetingTitle>
              <S.MeetingInfoWrapper>
                <S.ImgWrapper>
                  <img src={meeting.img} css={S.Img} />
                  <S.Close>마감</S.Close>
                </S.ImgWrapper>
                <S.PersonInfoWrapper>
                  <S.PersonInfo>
                    남&nbsp;<S.Highlight>2</S.Highlight>/2
                    <S.Gray>&nbsp;· 29~33 · 의사</S.Gray>
                  </S.PersonInfo>
                  <S.PersonInfo>
                    여&nbsp;<S.Highlight>2</S.Highlight>/2
                    <S.Gray>&nbsp;· 29~33 · 의사 · 서울대</S.Gray>
                  </S.PersonInfo>
                </S.PersonInfoWrapper>
              </S.MeetingInfoWrapper>
            </S.MeetingContainer>
          ))}
        </S.MeetingWrapper>
        {visibleCount < meetings.length && (
          <S.More onClick={handleMoreMeeting}>
            더보기
            <MoreIcon />
          </S.More>
        )}
        <Button variant="icon" css={S.addIcon}>
          <AddIcon />
        </Button>
      </S.Content>
    </>
  );
};

export default Main;
