import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Badge, Button } from "components";
import { useToast } from "hooks";
import { useGetMeeting, usePostAttendMeetingRoom } from "services";
import { PEOPEL_CAPACITY_RADIOS, UnlockIcon } from "assets";
import { Profile } from "./containers";
import * as S from "./Home.styled";

const Home = () => {
  const { meetingId } = useParams();
  const userId = sessionStorage.getItem("id")!;
  const navigate = useNavigate();

  const { data } = useGetMeeting(meetingId!);
  const { mutate: mutatePostAttendMeetingRoom } = usePostAttendMeetingRoom();

  const { addToast } = useToast();

  const maleUsers = data?.users.filter((user) => user.gender === "MALE");
  const femaleUsers = data?.users.filter((user) => user.gender === "FEMALE");

  const checkRequired = (
    gender: "maleCondition" | "femaleCondition",
    condition: string
  ) => {
    return data?.[gender].selectConditions.includes(condition);
  };

  const handleAttendClick = () => {
    if (userId) {
      const req = { meetingId: meetingId!, userId: userId };

      mutatePostAttendMeetingRoom(req, {
        onSuccess: () => {
          addToast({ content: "참가신청 완료! 방장의 승인을 기다려주세요." });
        },
        onError: () => {
          addToast({ content: "참가조건에 맞지 않는 미팅이에요." });
        },
      });
    } else {
      addToast({ content: "로그인이 필요한 서비스 입니다." });
      navigate("/");
    }
  };

  return (
    <S.HomeWrapper>
      <S.ContentWrapper>
        <S.MainContent>
          <Badge
            css={S.badge}
            variant="smPink"
            label={
              PEOPEL_CAPACITY_RADIOS.find(
                ({ key }) => key === `${data?.peopleCapacity}`
              )?.label ?? "-"
            }
          />
          <span>{data?.title}</span>
          <span>{data?.description}</span>
        </S.MainContent>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>미팅 희망 지역</S.Title>
            <S.Desc>정확한 장소는 함께 정해보세요!</S.Desc>
          </S.TitleWrapper>
          <div>
            {data?.locations.map((location) => (
              <Badge key={location} variant="mdWhite" label={location} />
            ))}
          </div>
        </S.Content>
        <S.Content>
          <div>
            <S.TitleWrapper>
              <S.Title>남자</S.Title>
            </S.TitleWrapper>
            <S.Conditions>
              <S.Title>✅ 참가조건</S.Title>
              <S.Division />
              <S.Condition>
                {data?.maleCondition.selectConditions &&
                data?.maleCondition.selectConditions.length > 0 ? (
                  <>
                    {checkRequired("maleCondition", "AFFILIATION") && (
                      <S.ConditionRow>
                        <span>회사/학교</span>
                        {data?.maleCondition.affiliation.map((item) => (
                          <span key={item}>#{item} </span>
                        ))}
                      </S.ConditionRow>
                    )}
                    {checkRequired("maleCondition", "AGE") && (
                      <S.ConditionRow>
                        <span>나이</span>
                        <span>
                          {data?.maleCondition.minAge}~
                          {data?.maleCondition.maxAge}세 사이
                        </span>
                      </S.ConditionRow>
                    )}
                    {checkRequired("maleCondition", "HEIGHT") && (
                      <S.ConditionRow>
                        <span>키</span>
                        <span>
                          {data?.maleCondition.minHeight}~
                          {data?.maleCondition.maxHeight}cm 사이
                        </span>
                      </S.ConditionRow>
                    )}
                    {checkRequired("maleCondition", "SMOKING") && (
                      <S.ConditionRow>
                        <span>흡연</span>
                        <span>
                          {data?.maleCondition.smoking[0].smokingName}
                        </span>
                      </S.ConditionRow>
                    )}
                    {checkRequired("maleCondition", "DRINKGING") && (
                      <S.ConditionRow>
                        <span>음주</span>
                        <span>
                          {data?.maleCondition.drinking[0].drinkingName}
                        </span>
                      </S.ConditionRow>
                    )}
                    {checkRequired("maleCondition", "RELIGION") && (
                      <S.ConditionRow>
                        <span>종교</span>
                        <span>
                          {data?.maleCondition.religion[0].religionName}
                        </span>
                      </S.ConditionRow>
                    )}
                  </>
                ) : (
                  <S.UnlockWrapper>
                    <span>모두 환영</span>
                    <UnlockIcon />
                  </S.UnlockWrapper>
                )}
              </S.Condition>
            </S.Conditions>
            <Profile
              leaderId={data?.leaderUserId}
              peopleCapacity={data?.peopleCapacity}
              users={maleUsers}
            />
          </div>
        </S.Content>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>여자</S.Title>
          </S.TitleWrapper>
          <S.Conditions>
            <S.Title>✅ 참가조건</S.Title>
            <S.Division />
            <S.Condition>
              {data?.femaleCondition.selectConditions &&
              data?.femaleCondition.selectConditions.length > 0 ? (
                <>
                  {checkRequired("femaleCondition", "AFFILIATION") && (
                    <S.ConditionRow>
                      <span>회사/학교</span>
                      {data?.femaleCondition.affiliation.map((item) => (
                        <span key={item}>#{item} </span>
                      ))}
                    </S.ConditionRow>
                  )}
                  {checkRequired("femaleCondition", "AGE") && (
                    <S.ConditionRow>
                      <span>나이</span>
                      <span>
                        {data?.femaleCondition.minAge}~
                        {data?.femaleCondition.maxAge}세 사이
                      </span>
                    </S.ConditionRow>
                  )}
                  {checkRequired("femaleCondition", "HEIGHT") && (
                    <S.ConditionRow>
                      <span>키</span>
                      <span>
                        {data?.femaleCondition.minHeight}~
                        {data?.femaleCondition.maxHeight}cm 사이
                      </span>
                    </S.ConditionRow>
                  )}
                  {checkRequired("femaleCondition", "SMOKING") && (
                    <S.ConditionRow>
                      <span>흡연</span>
                      <span>
                        {data?.femaleCondition.smoking[0].smokingName}
                      </span>
                    </S.ConditionRow>
                  )}
                  {checkRequired("femaleCondition", "DRINKGING") && (
                    <S.ConditionRow>
                      <span>음주</span>
                      <span>
                        {data?.femaleCondition.drinking[0].drinkingName}
                      </span>
                    </S.ConditionRow>
                  )}
                  {checkRequired("femaleCondition", "RELIGION") && (
                    <S.ConditionRow>
                      <span>종교</span>
                      <span>
                        {data?.femaleCondition.religion[0].religionName}
                      </span>
                    </S.ConditionRow>
                  )}{" "}
                </>
              ) : (
                <S.UnlockWrapper>
                  <span>모두 환영</span>
                  <UnlockIcon />
                </S.UnlockWrapper>
              )}
            </S.Condition>
          </S.Conditions>
          <Profile
            leaderId={data?.leaderUserId}
            peopleCapacity={data?.peopleCapacity}
            users={femaleUsers}
          />
        </S.Content>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button css={S.button} variant="lgPink" onClick={handleAttendClick}>
          참가 신청
        </Button>
      </S.ButtonWrapper>
    </S.HomeWrapper>
  );
};

export default Home;
