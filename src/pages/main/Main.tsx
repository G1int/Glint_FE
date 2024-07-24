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
import { mainNewMeetingsItem } from "types";

const Main = () => {
  const [lastId, setLastId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<mainNewMeetingsItem[]>([]);

  const size = 2;

  const { data } = useGetMainNewMeetings(lastId, size);

  const { addToast } = useToast();

  useEffect(() => {
    if (data?.meetings) {
      setMeetingList((prevMeetings) => [...prevMeetings, ...data.meetings]);
    }
  }, [data]);

  const handleMoreMeeting = () => {
    if (data?.meetings && data.meetings.length > 0) {
      setLastId(data.meetings[data.meetings.length - 1].meetingId);
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
      <MeetingCard meetingList={meetingList} />
      {meetingList.length >= 2 && data && data?.meetings.length > 1 && (
        <S.More onClick={handleMoreMeeting}>
          더보기
          <MoreIcon />
        </S.More>
      )}
      <Button variant="icon" css={S.addIcon}>
        <AddIcon />
      </Button>
    </S.Content>
  );
};

export default Main;
