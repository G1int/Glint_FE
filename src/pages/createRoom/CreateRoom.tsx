import React from "react";
import { useForm } from "react-hook-form";

import {
  BackLayout,
  Badge,
  Button,
  FormInput,
  FormRadioButton,
  Textarea,
} from "components";
import { PEOPEL_CAPACITY_RADIOS, SELECT_CONDITIONS, SELECT_DATA } from "assets";
import { usePostCreateRoom } from "services";
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
      minAge: 19,
      maxAge: 50,
    },
    height: {
      minHeight: 100,
      maxHeight: 250,
    },
  },
  femaleConditions: {
    selectConditions: [],
    affiliation: [],
    religions: "",
    smoking: "",
    drinking: "",
    age: {
      minAge: 0,
      maxAge: 50,
    },
    height: {
      minHeight: 100,
      maxHeight: 250,
    },
  },
};

const CreateRoom = () => {
  const { mutate: postCreateRoom } = usePostCreateRoom();

  const { watch, setValue, register, handleSubmit } = useForm<createRoomForm>({
    defaultValues: initForm,
    mode: "onTouched",
  });

  const myId = sessionStorage.getItem("id");

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

  const handleClickButton = (data: createRoomForm): void => {
    const req = {
      body: {
        title: data.title,
        description: data.description,
        leaderUserId: myId!,
        locationIds: [1, 2], //TODO: 임시 추가 아이디로 location 불러오는 api 연동 후 수정 예정
        peopleCapacity: data.peopleCapacity,
        maleConditions: {
          selectConditions: data.maleConditions?.selectConditions,
          affiliation: data.maleConditions?.affiliation,
          minAge: data.maleConditions?.age.minAge ?? null,
          maxAge: data.maleConditions?.age.maxAge ?? null,
          maxHeight: data.maleConditions?.height.maxHeight ?? null,
          minHeight: data.maleConditions?.height.minHeight ?? null,
          religionIds: data.maleConditions?.religions
            ? [+data.maleConditions?.religions]
            : [],
          smokingIds: data.maleConditions?.smoking
            ? [+data.maleConditions?.smoking]
            : [],
          drinkingIds: data.maleConditions?.drinking
            ? [+data.maleConditions?.drinking]
            : [],
        },
        femaleConditions: {
          selectConditions: data.femaleConditions?.selectConditions,
          affiliation: data.femaleConditions?.affiliation,
          minAge: data.femaleConditions?.age.minAge ?? null,
          maxAge: data.femaleConditions?.age.maxAge ?? null,
          maxHeight: data.femaleConditions?.height.maxHeight ?? null,
          minHeight: data.femaleConditions?.height.minHeight ?? null,
          religionIds: data.femaleConditions?.religions
            ? [+data.femaleConditions?.religions]
            : [],
          smokingIds: data.femaleConditions?.smoking
            ? [+data.femaleConditions?.smoking]
            : [],
          drinkingIds: data.femaleConditions?.drinking
            ? [+data.femaleConditions?.drinking]
            : [],
        },
      },
    };

    postCreateRoom(req, {
      onSuccess: () => {
        console.log("complete"); //TODO: 성공 시 이동하는 페이지에 대해 화면 설계서에 작성 X
      },
    });
  };

  //TODO: 성별 데이터 받아와서 처리해야함 일단 이성 - male / 동성 - female로 적용함
  return (
    <BackLayout title="미팅 만들기" hasTopContent>
      <S.CreateRoom>
        <S.CreateRoomWrapper>
          <S.MainContent>
            <S.MainContentBox>
              <S.RequiredContent>
                <S.Title>인원수</S.Title>
                <S.RequiredBox />
              </S.RequiredContent>
              <FormRadioButton
                css={S.formRadioButton}
                radioList={PEOPEL_CAPACITY_RADIOS}
                value={watch("peopleCapacity")}
                register={register("peopleCapacity", { required: true })}
              />
            </S.MainContentBox>
            <S.MainContentBox>
              <S.RequiredContent>
                <S.Title>제목</S.Title>
                <S.RequiredBox />
              </S.RequiredContent>
              <FormInput
                css={S.input}
                placeholder="제목을 입력해주세요"
                register={register("title", { required: true })}
              />
            </S.MainContentBox>
            <S.MainContentBox>
              <S.RequiredContent>
                <S.Title>내용</S.Title>
                <S.RequiredBox />
              </S.RequiredContent>
              <Textarea
                placeholder="간단한 자기소개나 만나고 싶은 이성, 미팅의 주제 등에 대해 작성해보세요"
                register={register("description", { required: true })}
              />
            </S.MainContentBox>
          </S.MainContent>
          <S.MainContent>
            {/* TODO: 수정 필요 */}
            <S.RequiredContent>
              <S.Title marginBottom={4}>미팅 희망 지역</S.Title>
              <S.RequiredBox />
            </S.RequiredContent>
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
                      variant="mdWhite"
                      isSelected={watch(
                        "maleConditions.selectConditions"
                      ).includes(select.key)}
                      handleClick={handleSelectConditions(
                        "maleConditions",
                        select.key
                      )}
                      label={select.label}
                    />
                  ))}
                </S.BadgeWrapper>
              </S.SelectContentBox>
              {!!watch("maleConditions.selectConditions").length && (
                <S.Division />
              )}
              {watch("maleConditions.selectConditions").includes(
                "AFFILIATION"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>회사 / 학교</S.SubTitle>
                  <FormInput
                    css={S.formInput}
                    placeholder="키워드 입력 후 엔터를 쳐주세요"
                    register={register("maleConditions.affiliation")}
                  />
                </S.SelectContentBox>
              )}
              {watch("maleConditions.selectConditions").includes("AGE") && (
                <S.SelectContentBox>
                  {/* TODO: 수정예정 */}
                  <S.SubTitle>나이</S.SubTitle>
                  <input type="range"></input>
                </S.SelectContentBox>
              )}
              {watch("maleConditions.selectConditions").includes("HEIGHT") && (
                <S.SelectContentBox>
                  {/* TODO: 수정예정 */}
                  <S.SubTitle>키</S.SubTitle>
                  <input type="range"></input>
                </S.SelectContentBox>
              )}
              {watch("maleConditions.selectConditions").includes(
                "RELIGIONS"
              ) && (
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
              )}
              {watch("maleConditions.selectConditions").includes("SMOKING") && (
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
              )}
              {watch("maleConditions.selectConditions").includes(
                "DRINKING"
              ) && (
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
              )}
            </S.SelectContent>
            <S.Division />
            <S.SelectContent>
              <S.Desc>
                <strong>동성</strong>(자유롭게 선택해주세요)
              </S.Desc>
              <S.BadgeWrapper>
                {SELECT_CONDITIONS.map((select) => (
                  <Badge
                    key={select.key}
                    variant="mdWhite"
                    isSelected={watch(
                      "femaleConditions.selectConditions"
                    ).includes(select.key)}
                    handleClick={handleSelectConditions(
                      "femaleConditions",
                      select.key
                    )}
                    label={select.label}
                  />
                ))}
              </S.BadgeWrapper>
              {!!watch("femaleConditions.selectConditions").length && (
                <S.Division />
              )}
              {watch("femaleConditions.selectConditions").includes(
                "AFFILIATION"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>회사 / 학교</S.SubTitle>
                  <FormInput
                    css={S.formInput}
                    placeholder="키워드 입력 후 엔터를 쳐주세요"
                    register={register("femaleConditions.affiliation")}
                  />
                </S.SelectContentBox>
              )}
              {watch("femaleConditions.selectConditions").includes("AGE") && (
                <S.SelectContentBox>
                  {/* TODO: 수정예정 */}
                  <S.SubTitle>나이</S.SubTitle>
                  <input type="range"></input>
                </S.SelectContentBox>
              )}
              {watch("femaleConditions.selectConditions").includes(
                "HEIGHT"
              ) && (
                <S.SelectContentBox>
                  {/* TODO: 수정예정 */}
                  <S.SubTitle>키</S.SubTitle>
                  <input type="range"></input>
                </S.SelectContentBox>
              )}
              {watch("femaleConditions.selectConditions").includes(
                "RELIGIONS"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>종교</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={religionData!}
                    variant="smNavy"
                    value={watch("femaleConditions.religions")}
                    register={register("femaleConditions.religions")}
                  />
                </S.SelectContentBox>
              )}
              {watch("femaleConditions.selectConditions").includes(
                "SMOKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>흡연</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={smokingData!}
                    variant="smNavy"
                    value={watch("femaleConditions.smoking")}
                    register={register("femaleConditions.smoking")}
                  />
                </S.SelectContentBox>
              )}
              {watch("femaleConditions.selectConditions").includes(
                "DRINKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>음주</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={drinkingData!}
                    variant="smNavy"
                    value={watch("femaleConditions.drinking")}
                    register={register("femaleConditions.drinking")}
                  />
                </S.SelectContentBox>
              )}
            </S.SelectContent>
          </S.MainContent>
        </S.CreateRoomWrapper>
        <S.ButtonWrapper>
          <Button
            css={S.button}
            variant="lgPink"
            onClick={handleSubmit(handleClickButton)}
          >
            등록
          </Button>
        </S.ButtonWrapper>
      </S.CreateRoom>
    </BackLayout>
  );
};

export default CreateRoom;
