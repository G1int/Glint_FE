import React from "react";
import { useForm } from "react-hook-form";

import {
  BackLayout,
  Badge,
  FormInput,
  FormRadioButton,
  Textarea,
} from "components";
import { PEOPEL_CAPACITY_RADIOS, SELECT_CONDITIONS, SELECT_DATA } from "assets";
import type { createRoomForm } from "types";
import * as S from "./CreateRoom.styled";

const initForm = {
  peopleCapacity: "2",
  title: "",
  description: "",
  locationIds: null,
  maleConditions: {
    selectConditions: [],
    affiliation: [],
    religions: "",
    smoking: "",
    drinking: "",
    age: {
      minAge: null,
      maxAge: null,
    },
    height: {
      minHeight: null,
      maxHeight: null,
    },
  },
  femaleConditions: {
    selectConditions: [],
    affiliation: [],
    religions: "",
    smoking: "",
    drinking: "",
    age: {
      minAge: null,
      maxAge: null,
    },
    height: {
      minHeight: null,
      maxHeight: null,
    },
  },
};

const CreateRoom = () => {
  const { watch, setValue, register } = useForm<createRoomForm>({
    defaultValues: initForm,
    mode: "onTouched",
  });

  const religionData = SELECT_DATA.find(
    (item) => item.title === "종교"
  )?.options;
  const smokingData = SELECT_DATA.find(
    (item) => item.title === "흡연"
  )?.options;
  const drinkingData = SELECT_DATA.find(
    (item) => item.title === "음주"
  )?.options;

  const handleSelectConditions =
    (
      name: "maleConditions" | "femaleConditions",
      value: (typeof SELECT_CONDITIONS)[number]["key"]
    ) =>
    (): void => {
      const currentBadges = watch(`${name}.selectConditions`);
      const filteredBadges = watch(`${name}.selectConditions`).filter(
        (item) => item !== value
      );

      if (currentBadges.includes(value)) {
        setValue(`${name}.selectConditions`, filteredBadges);
      } else {
        setValue(`${name}.selectConditions`, [...currentBadges, value]);
      }
    };

  return (
    <BackLayout title="미팅 만들기" hasTopContent>
      <S.CreateRoomWrapper>
        <S.MainContent>
          <S.MainContentBox>
            <S.Title>인원수</S.Title>
            <FormRadioButton
              css={S.formRadioButton}
              radioList={PEOPEL_CAPACITY_RADIOS}
              value={watch("peopleCapacity")}
              register={register("peopleCapacity", { required: true })}
            />
          </S.MainContentBox>
          <S.MainContentBox>
            <S.Title>제목</S.Title>
            <FormInput
              css={S.input}
              placeholder="제목을 입력해주세요"
              register={register("title", { required: true })}
            />
          </S.MainContentBox>
          <S.MainContentBox>
            <S.Title>내용</S.Title>
            <Textarea
              placeholder="간단한 자기소개나 만나고 싶은 이성, 미팅의 주제 등에 대해 작성해보세요"
              register={register("description", { required: true })}
            />
          </S.MainContentBox>
        </S.MainContent>
        <S.MainContent>
          {/* TODO: 수정 필요 */}
          <S.Title marginBottom={4}>미팅 희망 지역</S.Title>
          <S.Desc marginBottom={8}>정확한 장소는 함께 정해보세요!</S.Desc>
        </S.MainContent>
        <S.MainContent>
          <S.SelectContent>
            <S.SelectContentBox>
              <S.Title marginBottom={12}>
                참가 조건<strong>(선택)</strong>
              </S.Title>
              <S.Desc>
                <strong>이성</strong>(최대 2개까지 선택해주세요)
              </S.Desc>
              <S.BadgeWrapper>
                {/* TODO: variant 수정 예정 */}
                {SELECT_CONDITIONS.map((select) => (
                  <Badge
                    key={select.key}
                    variant="mdNavy"
                    isSelected={watch(
                      "maleConditions.selectConditions"
                    ).includes(select.key)}
                    handleClick={handleSelectConditions(
                      "maleConditions",
                      select.key
                    )}
                  >
                    {select.label}
                  </Badge>
                ))}
              </S.BadgeWrapper>
            </S.SelectContentBox>
            <S.Division />
            <S.SelectContentBox>
              <S.SubTitle>회사 / 학교</S.SubTitle>
              <FormInput
                css={S.formInput}
                placeholder="키워드 입력 후 엔터를 쳐주세요"
                register={register("maleConditions.affiliation")}
              />
            </S.SelectContentBox>
            <S.SelectContentBox>
              <S.SubTitle>나이</S.SubTitle>
              <FormInput register={register("maleConditions.age")} />
            </S.SelectContentBox>
            <S.SelectContentBox>
              <S.SubTitle>키</S.SubTitle>
              <FormInput register={register("maleConditions.height")} />
            </S.SelectContentBox>
            <S.SelectContentBox>
              <S.SubTitle>종교</S.SubTitle>
              <FormRadioButton
                css={S.selectConditionFormRadioButton}
                radioList={religionData!}
                variant="smNavy"
                value={watch("maleConditions.religions")}
                register={register("maleConditions.religions")}
              />
            </S.SelectContentBox>
            <S.SelectContentBox>
              <S.SubTitle>흡연</S.SubTitle>
              <FormRadioButton
                css={S.selectConditionFormRadioButton}
                radioList={smokingData!}
                variant="smNavy"
                value={watch("maleConditions.smoking")}
                register={register("maleConditions.smoking")}
              />
            </S.SelectContentBox>
            <S.SelectContentBox>
              <S.SubTitle>음주</S.SubTitle>
              <FormRadioButton
                css={S.selectConditionFormRadioButton}
                radioList={drinkingData!}
                variant="smNavy"
                value={watch("maleConditions.drinking")}
                register={register("maleConditions.drinking")}
              />
            </S.SelectContentBox>
          </S.SelectContent>
          <S.SelectContent>
            <S.Desc>
              <strong>이성</strong>(최대 2개까지 선택해주세요)
            </S.Desc>
          </S.SelectContent>
        </S.MainContent>
      </S.CreateRoomWrapper>
    </BackLayout>
  );
};

export default CreateRoom;
