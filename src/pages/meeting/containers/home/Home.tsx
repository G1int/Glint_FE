import React from "react";
import { useParams } from "react-router-dom";

import { Badge, Button } from "components";
import { useGetMeeting } from "services";
import { PEOPEL_CAPACITY_RADIOS } from "assets";
import * as S from "./Home.styled";

const Home = () => {
  const { meetingId } = useParams();
  const { data } = useGetMeeting(meetingId!);

  const checkRequired = (
    gender: "maleCondition" | "femaleCondition",
    condition: string
  ) => {
    return data?.[gender].selectConditions.includes(condition);
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
            <div>
              {data?.locations.map((location) => (
                <Badge key={location} variant="mdWhite" label={location} />
              ))}
            </div>
          </S.TitleWrapper>
        </S.Content>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>여자</S.Title>
          </S.TitleWrapper>
          <S.Conditions>
            <S.Title>✅ 참가조건</S.Title>
            <S.Division />
            <S.Condition>
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
                  <span>{data?.femaleCondition.smoking[0].smokingName}</span>
                </S.ConditionRow>
              )}
              {checkRequired("femaleCondition", "DRINGING") && (
                <S.ConditionRow>
                  <span>흡연</span>
                  <span>{data?.femaleCondition.drinking[0].drinkingName}</span>
                </S.ConditionRow>
              )}
              {checkRequired("femaleCondition", "RELIGION") && (
                <S.ConditionRow>
                  <span>흡연</span>
                  <span>{data?.femaleCondition.religion[0].religionName}</span>
                </S.ConditionRow>
              )}
            </S.Condition>
          </S.Conditions>
        </S.Content>
        <S.Content>
          <S.TitleWrapper>
            <S.Title>남자</S.Title>
          </S.TitleWrapper>
          <S.Conditions>
            <S.Title>✅ 참가조건</S.Title>
            <S.Division />
            <S.Condition>
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
                    {data?.maleCondition.minAge}~{data?.maleCondition.maxAge}세
                    사이
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
                  <span>{data?.maleCondition.smoking[0].smokingName}</span>
                </S.ConditionRow>
              )}
              {checkRequired("maleCondition", "DRINGING") && (
                <S.ConditionRow>
                  <span>흡연</span>
                  <span>{data?.maleCondition.drinking[0].drinkingName}</span>
                </S.ConditionRow>
              )}
              {checkRequired("maleCondition", "RELIGION") && (
                <S.ConditionRow>
                  <span>흡연</span>
                  <span>{data?.maleCondition.religion[0].religionName}</span>
                </S.ConditionRow>
              )}
            </S.Condition>
          </S.Conditions>
        </S.Content>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button css={S.button} variant="lgPink">
          참가 신청
        </Button>
      </S.ButtonWrapper>
    </S.HomeWrapper>
  );
};

export default Home;
