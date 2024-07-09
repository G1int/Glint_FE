import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { BackLayout, Button } from "components";
import type { SignupForm } from "types";
import {
  ProgressBar,
  SignupBirth,
  SignupGender,
  SignupHeight,
  SignupNickname,
  SignupProfile,
} from "./contatiners";
import * as S from "./Signup.styled";

const Signup = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const {
    formState: { errors },
    watch,
    setValue,
    register,
    trigger,
    handleSubmit,
  } = useForm<SignupForm>({
    defaultValues: {
      nickname: "",
      gender: null,
      height: 0,
      birth: {
        year: 0,
        month: 0,
        date: 0,
      },
      profile: null,
    },
  });
  const isDisabledRequired =
    page === 0
      ? !watch("nickname")
      : page === 1
      ? !watch("gender")
      : page === 2
      ? !(
          !!watch("birth.year") ||
          !!watch("birth.month") ||
          !!watch("birth.date")
        )
      : page === 3
      ? !watch("height")
      : page === 4 && !watch("profile");

  const handleClickNextButton = () => {
    setPage(page + 1);
  };

  const renderPage = (page: number) => {
    switch (page) {
      case 0:
        return (
          <SignupNickname
            errors={errors}
            watch={watch}
            setValue={setValue}
            register={register}
            trigger={trigger}
          />
        );

      case 1:
        return <SignupGender watch={watch} register={register} />;

      case 2:
        return (
          <SignupBirth
            errors={errors}
            watch={watch}
            register={register}
            trigger={trigger}
          />
        );

      case 3:
        return (
          <SignupHeight
            errors={errors}
            watch={watch}
            register={register}
            trigger={trigger}
          />
        );

      case 4:
        return (
          <SignupProfile
            errors={errors}
            watch={watch}
            setValue={setValue}
            register={register}
            trigger={trigger}
          />
        );
    }
  };

  const handleClickPrevButton = (): void => {
    if (page === 0) return navigate(-1);

    setPage(page - 1);
  };

  return (
    <BackLayout handleClickBack={handleClickPrevButton}>
      <S.Signup>
        {/* TODO: 현재 좋은 방법이 생각나지 않아 매직넘버 사용 추후 수정 예정 */}
        <ProgressBar filledRange={(100 / 6) * (page + 1)} />
        {renderPage(page)}
      </S.Signup>
      <Button
        variant="lgPink"
        disabled={Object.keys(errors).length > 0 || isDisabledRequired}
        onClick={handleSubmit(handleClickNextButton)}
      >
        다음
      </Button>
    </BackLayout>
  );
};

export default Signup;
