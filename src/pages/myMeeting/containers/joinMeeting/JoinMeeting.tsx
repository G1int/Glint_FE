import * as S from "./JoinMeeting.styled";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";
import { useGetMyMeeting } from "services";
import { useEffect, useState } from "react";
import { meetingListItem } from "types";
import { MeetingCard } from "components";
import { MoreIcon, StickerIcon } from "assets";
import { useToast } from "hooks";

const JoinMeeting = () => {
  const [lastMeetingId, setLastMeetingId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<meetingListItem[]>([]);

  const { addToast } = useToast();
  const userId = useRecoilValue(userIdSelector);

  const limit = 3;

  const { data, error } = useGetMyMeeting(
    "ACCEPTED",
    userId!,
    lastMeetingId,
    limit
  );

  useEffect(() => {
    if (data?.meetings) {
      setMeetingList((prevMeetings) => [...prevMeetings, ...data.meetings]);
    } else if (error) {
      addToast({
        content: "데이터 호출에 문제가 생겼습니다. 다시 시도해주세요.",
      });
      console.error("참여 미팅 리스트 API 실패:", error);
    }
  }, [data, error]);

  const handleMoreMeeting = () => {
    if (data?.meetings && data.meetings.length > 0) {
      setLastMeetingId(data.meetings[data.meetings.length - 1].meetingId);
    } else if (error) {
      addToast({
        content: "데이터 호출에 문제가 생겼습니다. 다시 시도해주세요.",
      });
      console.error("메인 미팅 리스트 API 실패:", error);
    }
  };

  return (
    <>
      {meetingList.length > 0 ? (
        <S.MeetingContainer>
          <MeetingCard meetingList={meetingList} />
          {meetingList.length >= limit &&
            data &&
            data?.meetings.length >= limit && (
              <S.More onClick={handleMoreMeeting}>
                더보기
                <MoreIcon />
              </S.More>
            )}
        </S.MeetingContainer>
      ) : (
        <S.EmptyUserJoinMeetingWrapper>
          <S.StickerBox>
            <StickerIcon />
          </S.StickerBox>
          <S.EmptyUserText>
            미팅 참가
            <br />
            신청 목록이 없어요.
          </S.EmptyUserText>
        </S.EmptyUserJoinMeetingWrapper>
      )}
    </>
  );
};

export default JoinMeeting;
