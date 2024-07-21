import { Badge } from "components/badge";
import * as S from "./MeetingCard.styled";
import { useState } from "react";
import { MoreIcon } from "assets";

interface MeetingCardProps {
  meetingList: Array<{ id: number; img: string }>;
  count: number;
}

const MeetingCard = ({ meetingList, count }: MeetingCardProps) => {
  const [visibleCount, setVisibleCount] = useState(count);
  const handleMoreMeeting = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, meetingList.length));
  };

  return (
    <>
      <S.MeetingWrapper>
        {meetingList.slice(0, visibleCount).map((meeting) => (
          <S.MeetingContainer key={meeting.id}>
            <S.BadgeWrapper>
              <Badge variant="smPink" label="2:2" />
              <Badge variant="smNavy" label="인천" />
            </S.BadgeWrapper>
            <S.MeetingTitle>
              서울 30대 초 의사 미팅서울 30대 초 의사 미팅서울 30대 초 의사
              미팅서울 30대 초 의사 미팅서울 30대 초 의사 미팅서울 30대 초 의사
              미팅
            </S.MeetingTitle>
            <S.MeetingInfoWrapper>
              <S.ImgWrapper>
                <img src={meeting.img} css={S.Img} />
                <S.Close>마감</S.Close>
              </S.ImgWrapper>
              <S.PersonInfoWrapper>
                <S.PersonInfo>
                  남&nbsp;<S.Highlight>2</S.Highlight>/2
                  <S.Gray>&nbsp;· 29세~33세</S.Gray>
                </S.PersonInfo>
                <S.PersonInfo>
                  여&nbsp;<S.Highlight>2</S.Highlight>/2
                  <S.Gray>&nbsp;· 29세~33세</S.Gray>
                </S.PersonInfo>
              </S.PersonInfoWrapper>
            </S.MeetingInfoWrapper>
          </S.MeetingContainer>
        ))}
      </S.MeetingWrapper>
      {visibleCount < meetingList.length && (
        <S.More onClick={handleMoreMeeting}>
          더보기
          <MoreIcon />
        </S.More>
      )}
    </>
  );
};

export default MeetingCard;
