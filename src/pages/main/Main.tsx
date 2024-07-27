import * as S from "./Main.styled";
import { Button, Header, MeetingCard } from "components";
import {
  AddIcon,
  BellIcon,
  FilterIcon,
  LogoIcon,
  mainIconList,
  MoreIcon,
} from "assets";
import { useToast } from "hooks";
import { useGetMainNewMeetings } from "services";
import { useEffect, useState } from "react";
import { meetingListItem } from "types";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";

const Main = () => {
  const navigate = useNavigate();

  const [lastMeetingId, setLastMeetingId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<meetingListItem[]>([]);

  const limit = 2;

  const { data } = useGetMainNewMeetings(lastMeetingId, limit);

  const { addToast } = useToast();
  const userId = useRecoilValue(userIdSelector);

  useEffect(() => {
    if (data?.meetings) {
      setMeetingList((prevMeetings) => [...prevMeetings, ...data.meetings]);
    }
  }, [data]);

  const handleMoreMeeting = () => {
    if (data?.meetings && data.meetings.length > 0) {
      setLastMeetingId(data.meetings[data.meetings.length - 1].meetingId);
    }
  };

  const handleClickKeyword = (keyword: string) => {
    if (keyword) {
      navigate("/search", { state: keyword });
    }
  };

  const handleAddIcon = () => {
    if (userId) {
      navigate("/createRoom");
    } else {
      addToast({ content: "로그인이 필요한 서비스 입니다." });
      navigate("/");
    }
  };

  return (
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
          <S.MainIconWrapper
            key={index}
            onClick={() => handleClickKeyword(item.text)}
          >
            {item.image}
            {item.text}
          </S.MainIconWrapper>
        ))}
      </S.MainIconContainer>
      <S.TitleWrapper>
        <S.Title>New 미팅</S.Title>
        <FilterIcon />
      </S.TitleWrapper>
      <MeetingCard meetingList={meetingList} />
      {meetingList.length >= limit &&
        data &&
        data?.meetings.length >= limit && (
          <S.More onClick={handleMoreMeeting}>
            더보기
            <MoreIcon />
          </S.More>
        )}
      <Button variant="icon" css={S.addIcon} onClick={handleAddIcon}>
        <AddIcon />
      </Button>
    </S.Content>
  );
};

export default Main;
