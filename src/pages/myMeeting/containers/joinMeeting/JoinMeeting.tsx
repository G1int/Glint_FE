import * as S from "./JoinMeeting.styled";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";
import { useGetMyMeeting } from "services";
import { useEffect, useState } from "react";
import { meetingListItem } from "types";
import { MeetingCard } from "components";
import { MoreIcon } from "assets";

const JoinMeeting = () => {
  const [lastMeetingId, setLastMeetingId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<meetingListItem[]>([]);

  const userId = useRecoilValue(userIdSelector);

  const limit = 3;

  const { data } = useGetMyMeeting("ACCEPTED", userId!, lastMeetingId, limit);

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

  return (
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
  );
};

export default JoinMeeting;
