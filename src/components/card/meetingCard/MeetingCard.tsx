import { Badge } from "components/badge";
import * as S from "./MeetingCard.styled";
import { meetingListItem } from "types";
import { useNavigate } from "react-router-dom";
import { meetingImage } from "assets";

interface MeetingCardProps {
  meetingList: meetingListItem[];
}

const MeetingCard = ({ meetingList }: MeetingCardProps) => {
  const navigate = useNavigate();

  const handleClickMeeting = (meetingId: number) => {
    if (meetingId) {
      navigate(`/meeting/${meetingId}`);
    }
  };

  return (
    <S.MeetingWrapper>
      {meetingList &&
        meetingList.map((item, index) => (
          <S.MeetingContainer
            key={index}
            onClick={() => handleClickMeeting(item.meetingId)}
          >
            <S.BadgeWrapper>
              <Badge
                variant="smPink"
                label={`${item.peopleCapacity}:${item.peopleCapacity}`}
              />
              {item.locations.map((state, index) => (
                <Badge variant="smNavy" label={state} key={index} />
              ))}
            </S.BadgeWrapper>
            <S.MeetingTitle>{item.title}</S.MeetingTitle>
            <S.MeetingInfoWrapper>
              <S.ImgWrapper>
                {/* TODO : 이미지 추가 시 수정 필요 */}
                {index === 0 || index % 2 === 0 ? (
                  <img src={meetingImage[0]} css={S.Img} key={index} />
                ) : (
                  <img src={meetingImage[1]} css={S.Img} key={index} />
                )}
                {item.peopleCapacity === item.maleCount &&
                  item.peopleCapacity === item.femaleCount && (
                    <S.Close>마감</S.Close>
                  )}
              </S.ImgWrapper>
              <S.PersonInfoWrapper>
                <S.PersonInfo>
                  <S.PersonCapacity>
                    남&nbsp;
                    <S.Highlight>{item.maleCount}</S.Highlight>/
                    {item.peopleCapacity}
                  </S.PersonCapacity>
                  &nbsp;· {item.maleAgeRange.minAge}세~
                  {item.maleAgeRange.maxAge}세
                </S.PersonInfo>
                <S.PersonInfo>
                  <S.PersonCapacity>
                    여&nbsp;<S.Highlight>{item.femaleCount}</S.Highlight>/
                    {item.peopleCapacity}
                  </S.PersonCapacity>
                  &nbsp;· {item.femaleAgeRange.minAge}세~
                  {item.femaleAgeRange.maxAge}세
                </S.PersonInfo>
              </S.PersonInfoWrapper>
            </S.MeetingInfoWrapper>
          </S.MeetingContainer>
        ))}
    </S.MeetingWrapper>
  );
};

export default MeetingCard;
