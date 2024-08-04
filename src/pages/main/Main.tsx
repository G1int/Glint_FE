import * as S from "./Main.styled";
import { Button, Header, MeetingCard, Spinner } from "components";
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
  const [isLoading, setIsLoading] = useState(true);

  const limit = 2;

  const { data, error, isFetchedAfterMount } = useGetMainNewMeetings(
    lastMeetingId,
    limit
  );

  const { addToast } = useToast();
  const userId = useRecoilValue(userIdSelector);

  useEffect(() => {
    if (data?.meetings && isFetchedAfterMount) {
      setMeetingList((prevMeetings) => {
        // 중복 제거
        const newMeetings = data.meetings.filter(
          (meeting) =>
            !prevMeetings.some((prev) => prev.meetingId === meeting.meetingId)
        );
        return [...prevMeetings, ...newMeetings];
      });
      setIsLoading(false);
    } else if (error) {
      addToast({
        content: "데이터 호출에 문제가 생겼습니다. 다시 시도해주세요.",
      });
      console.error("메인 미팅 리스트 API 실패:", error);
      setIsLoading(false);
    }
  }, [data, error, isFetchedAfterMount]);

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

  // TODO: 기능 구현 후 삭제
  const handleDoNotMake = () => {
    addToast({ content: "현재 개발중인 기능이에요. 조금만 기다려주세요:)" });
  };

  return (
    <S.Content>
      <Header css={S.header}>
        <LogoIcon css={S.logoIcon} />
        <S.BellIconWrapper>
          <Button variant="icon" onClick={handleDoNotMake}>
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
        <FilterIcon onClick={handleDoNotMake} />
      </S.TitleWrapper>
      {meetingList.length !== 0 && !isLoading ? (
        <>
          <MeetingCard meetingList={meetingList} />
          {meetingList.length >= limit &&
            data &&
            data?.meetings.length >= limit && (
              <S.More onClick={handleMoreMeeting}>
                더보기
                <MoreIcon />
              </S.More>
            )}
        </>
      ) : (
        <S.MeetingWrapper>
          <Spinner />
        </S.MeetingWrapper>
      )}
      <Button variant="icon" css={S.addIcon} onClick={handleAddIcon}>
        <AddIcon />
      </Button>
    </S.Content>
  );
};

export default Main;
