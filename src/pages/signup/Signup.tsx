import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { BackLayout, Button } from "components";
import { useToast } from "hooks";
import {
  usePostCheckNickname,
  usePostImage,
  usePutSignup as usePutSignup,
} from "services";
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
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const id = sessionStorage.getItem("id");

  const { mutate: mutateImage } = usePostImage();
  const { mutate: mutateCheckNickname } = usePostCheckNickname();
  const { mutate: mutatePutSignup } = usePutSignup();

  const { addToast } = useToast();

  const {
    formState: { errors },
    watch,
    setValue,
    register,
    trigger,
    setError,
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
        return <SignupProfile setValue={setValue} />;
    }
  };

  const handleClickPrevButton = (): void => {
    if (page === 0) return navigate(-1);

    setPage(page - 1);
  };

  const handleClickNextButton = (data: SignupForm) => {
    if (page === 0) {
      const req = {
        userId: id!,
        body: {
          nickname: data.nickname,
        },
      };

      mutateCheckNickname(req, {
        onSuccess: () => {
          return setPage(page + 1);
        },
        //TODO: 회원가입이 된 상태라 회원 탈퇴 후 로직 확인 필요
        onError: () => {
          setError("nickname", { message: "이미 사용 중인 닉네임이에요." });
        },
      });
    }

    if (data.profile && page === 4) {
      const req = { imageFile: data.profile as string };

      mutateImage(req, {
        onSuccess: (res) => {
          const req = {
            userId: id!,
            body: {
              nickname: data.nickname,
              gender: data.gender as "MALE" | "FEMALE",
              height: `${data.height}`,
              profileImage: res.url as string,
              birthdate: `${data.birth.year}-${
                `${data.birth.month}`.length === 1
                  ? `0${data.birth.month}`
                  : data.birth.month
              }-${
                `${data.birth.date}`.length === 1
                  ? `0${data.birth.date}`
                  : data.birth.date
              }`,
            },
          };

          mutatePutSignup(req, {
            onSuccess: () => {
              navigate("/main");
            },
            onError: () => {
              addToast({
                content:
                  "회원가입에 문제가 발생했습니다. 입력한 내용을 다시 확인해주세요",
              });
            },
          });
        },
      });
    }

    if (!(page === 0 || page === 4)) setPage(page + 1);
  };

  return (
    <BackLayout handleClickBack={handleClickPrevButton} isBack>
      <S.Signup>
        {/* TODO: 현재 좋은 방법이 생각나지 않아 매직넘버 사용 추후 수정 예정 */}
        {/* TODO: 사진 유무 판단하여 progressbar 설정하면 공수가 많이 들어 일단 현상 유지함 */}
        <ProgressBar filledRange={(100 / 5) * (page + 1)} />
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
