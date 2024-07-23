import Img from "assets/images/img_01.jpg";
import { MeetingCard } from "components";
import { useState } from "react";
import * as S from "./WaitMeeing.styled";

const WaitMeeting = () => {
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
    <S.MeetingContainer>
      <MeetingCard count={3} meetingList={meetings} />
    </S.MeetingContainer>
  );
};

export default WaitMeeting;
