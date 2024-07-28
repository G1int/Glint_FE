import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Controller } from "react-hook-form";

import { genderSelector } from "atoms";
import {
  BackLayout,
  Badge,
  Button,
  FormInput,
  FormRadioButton,
  Textarea,
  MultiLocationModal,
  RangeSlider,
} from "components";
import { useModal, useToast } from "hooks";
import {
  SmallChevronRightIcon,
  PEOPEL_CAPACITY_RADIOS,
  SELECT_CONDITIONS,
  SELECT_DATA,
  TagCloseWhiteIcon,
} from "assets";
import type { locationInfo } from "types";
import { useCreateRoom } from "./hooks";
import * as S from "./CreateRoom.styled";

const CreateRoom = () => {
  const [locations, setLocations] = useState<locationInfo[]>([]);

  const { gender } = useRecoilValue(genderSelector);

  const {
    watch,
    setValue,
    clearErrors,
    control,
    register,
    handleSubmit,
    handleSelectConditions,
    handleClickButton,
  } = useCreateRoom();
  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const religionData = SELECT_DATA.find(
    (item) => item.title === "종교"
  )?.options;
  const smokingData = SELECT_DATA.find(
    (item) => item.title === "흡연"
  )?.options;
  const drinkingData = SELECT_DATA.find(
    (item) => item.title === "음주"
  )?.options;

  const currentGender =
    gender === "MALE" ? "maleConditions" : "femaleConditions";

  const oppositeGender =
    gender === "MALE" ? "femaleConditions" : "maleConditions";

  const handleOpenLocationModal = () => {
    const handleConfirmLocation = (
      list: {
        id: number;
        locationName: string;
      }[]
    ) => {
      if (!list.length) {
        addToast({ content: "시/군/구를 선택해주세요." });
      } else {
        setLocations(list);
        handleCloseModal();
      }
    };

    handleOpenModal(
      <MultiLocationModal
        title="어디서 만나는게 편하세요?"
        highlight="최대 3개"
        description="까지 선택할 수 있어요."
        locations={locations}
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleConfirmLocation}
        maxLength={3}
      />
    );
  };

  const handleDeleteLocation = (deleteLocation: string) => () => {
    const filteredLocations = locations.filter(
      (location) => location.locationName !== deleteLocation
    );

    return setLocations(filteredLocations);
  };

  useEffect(() => {
    setValue("locations", locations);

    if (watch("locations")?.length) {
      clearErrors("locations");
    }
  }, [locations]);

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
            <div>
              <S.RequiredContent>
                <S.Title marginBottom={4}>미팅 희망 지역</S.Title>
                <S.RequiredBox />
              </S.RequiredContent>
              <S.Desc marginBottom={8}>정확한 장소는 함께 정해보세요!</S.Desc>
              <button onClick={handleOpenLocationModal}>
                선택하기 <SmallChevronRightIcon />
              </button>
            </div>
            <Controller
              name="locations"
              control={control}
              render={() => {
                return (
                  <>
                    {locations.map((location) => (
                      <Badge
                        css={S.badge}
                        key={location.id}
                        variant="mdNavy"
                        label={location.locationName}
                        icon={
                          <TagCloseWhiteIcon
                            onClick={handleDeleteLocation(
                              location.locationName
                            )}
                          />
                        }
                      />
                    ))}
                  </>
                );
              }}
            />
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
                  {SELECT_CONDITIONS.map((select) => (
                    <Badge
                      key={select.key}
                      variant="mdWhite"
                      isSelected={watch(
                        `${oppositeGender}.selectConditions`
                      ).includes(select.key)}
                      handleClick={handleSelectConditions(
                        `${oppositeGender}`,
                        select.key
                      )}
                      label={select.label}
                    />
                  ))}
                </S.BadgeWrapper>
              </S.SelectContentBox>
              {!!watch(`${oppositeGender}.selectConditions`).length && (
                <S.Division />
              )}
              {watch(`${oppositeGender}.selectConditions`).includes(
                "AFFILIATION"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>회사 / 학교</S.SubTitle>
                  <FormInput
                    css={S.formInput}
                    placeholder="키워드 입력 후 엔터를 쳐주세요"
                    register={register(`${oppositeGender}.affiliation`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${oppositeGender}.selectConditions`).includes("AGE") && (
                <S.SelectContentBox>
                  <S.SubTitle>나이</S.SubTitle>
                  <S.RangeText>
                    만 {watch(`${oppositeGender}.age.minAge`)}~
                    {watch(`${oppositeGender}.age.maxAge`)}세
                  </S.RangeText>
                  <Controller
                    control={control}
                    name={`${oppositeGender}.age`}
                    render={() => {
                      const handleChange = (min: number, max: number) => {
                        if (!(max - min)) return;

                        setValue(`${oppositeGender}.age.minAge`, min);
                        setValue(`${oppositeGender}.age.maxAge`, max);
                      };

                      return (
                        <RangeSlider
                          min={19}
                          max={50}
                          handleValueChange={handleChange}
                        />
                      );
                    }}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${oppositeGender}.selectConditions`).includes(
                "HEIGHT"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>키</S.SubTitle>
                  <S.RangeText>
                    {watch(`${oppositeGender}.height.minHeight`)}~
                    {watch(`${oppositeGender}.height.maxHeight`)}cm
                  </S.RangeText>
                  <Controller
                    control={control}
                    name={`${oppositeGender}.height`}
                    render={() => {
                      const handleChange = (min: number, max: number) => {
                        if (!(max - min)) return;

                        setValue(`${oppositeGender}.height.minHeight`, min);
                        setValue(`${oppositeGender}.height.maxHeight`, max);
                      };

                      return (
                        <RangeSlider
                          min={100}
                          max={250}
                          handleValueChange={handleChange}
                        />
                      );
                    }}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${oppositeGender}.selectConditions`).includes(
                "RELIGIONS"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>종교</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={religionData!}
                    variant="smNavy"
                    value={watch(`${oppositeGender}.religions`)}
                    register={register(`${oppositeGender}.religions`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${oppositeGender}.selectConditions`).includes(
                "SMOKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>흡연</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={smokingData!}
                    variant="smNavy"
                    value={watch(`${oppositeGender}.smoking`)}
                    register={register(`${oppositeGender}.smoking`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${oppositeGender}.selectConditions`).includes(
                "DRINKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>음주</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={drinkingData!}
                    variant="smNavy"
                    value={watch(`${oppositeGender}.drinking`)}
                    register={register(`${oppositeGender}.drinking`)}
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
                      `${currentGender}.selectConditions`
                    ).includes(select.key)}
                    handleClick={handleSelectConditions(
                      `${currentGender}`,
                      select.key
                    )}
                    label={select.label}
                  />
                ))}
              </S.BadgeWrapper>
              {!!watch(`${currentGender}.selectConditions`).length && (
                <S.Division />
              )}
              {watch(`${currentGender}.selectConditions`).includes(
                "AFFILIATION"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>회사 / 학교</S.SubTitle>
                  <FormInput
                    css={S.formInput}
                    placeholder="키워드 입력 후 엔터를 쳐주세요"
                    register={register(`${currentGender}.affiliation`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${currentGender}.selectConditions`).includes("AGE") && (
                <S.SelectContentBox>
                  <S.SubTitle>나이</S.SubTitle>
                  <S.RangeText>
                    만 {watch(`${currentGender}.age.minAge`)}~
                    {watch(`${currentGender}.age.maxAge`)}세
                  </S.RangeText>
                  <Controller
                    control={control}
                    name={`${currentGender}.age`}
                    render={() => {
                      const handleChange = (min: number, max: number) => {
                        if (!(max - min)) return;

                        setValue(`${currentGender}.age.minAge`, min);
                        setValue(`${currentGender}.age.maxAge`, max);
                      };

                      return (
                        <RangeSlider
                          min={19}
                          max={50}
                          handleValueChange={handleChange}
                        />
                      );
                    }}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${currentGender}.selectConditions`).includes(
                "HEIGHT"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>키</S.SubTitle>
                  <S.RangeText>
                    {watch(`${currentGender}.height.minHeight`)}~
                    {watch(`${currentGender}.height.maxHeight`)}cm
                  </S.RangeText>
                  <Controller
                    control={control}
                    name={`${currentGender}.height`}
                    render={() => {
                      const handleChange = (min: number, max: number) => {
                        if (!(max - min)) return;

                        setValue(`${currentGender}.height.minHeight`, min);
                        setValue(`${currentGender}.height.maxHeight`, max);
                      };

                      return (
                        <RangeSlider
                          min={100}
                          max={250}
                          handleValueChange={handleChange}
                        />
                      );
                    }}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${currentGender}.selectConditions`).includes(
                "RELIGIONS"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>종교</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={religionData!}
                    variant="smNavy"
                    value={watch(`${currentGender}.religions`)}
                    register={register(`${currentGender}.religions`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${currentGender}.selectConditions`).includes(
                "SMOKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>흡연</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={smokingData!}
                    variant="smNavy"
                    value={watch(`${currentGender}.smoking`)}
                    register={register(`${currentGender}.smoking`)}
                  />
                </S.SelectContentBox>
              )}
              {watch(`${currentGender}.selectConditions`).includes(
                "DRINKING"
              ) && (
                <S.SelectContentBox>
                  <S.SubTitle>음주</S.SubTitle>
                  <FormRadioButton
                    css={S.selectConditionFormRadioButton}
                    radioList={drinkingData!}
                    variant="smNavy"
                    value={watch(`${currentGender}.drinking`)}
                    register={register(`${currentGender}.drinking`)}
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
