import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { genderSelector } from "atoms";
import { useToast } from "hooks";
import { usePostCreateRoom, usePutEditRoom } from "services";
import { SELECT_CONDITIONS } from "assets";
import type { createRoomForm, GetMeetingResponse } from "types";

const initForm = {
  peopleCapacity: "2",
  title: "",
  description: "",
  locations: null,
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
      minAge: 19,
      maxAge: 50,
    },
    height: {
      minHeight: 100,
      maxHeight: 250,
    },
  },
};

const useCreateRoom = (data?: GetMeetingResponse) => {
  const navigate = useNavigate();
  const { meetingId } = useParams();

  const { gender } = useRecoilValue(genderSelector);

  const { mutate: postCreateRoom } = usePostCreateRoom();
  const { mutate: putEditRoom } = usePutEditRoom();

  const {
    watch,
    setValue,
    clearErrors,
    register,
    control,
    reset,
    handleSubmit,
  } = useForm<createRoomForm>({
    defaultValues: initForm,
    mode: "onTouched",
  });
  const { addToast } = useToast();

  const myId = sessionStorage.getItem("id");

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

        if (value === "AFFILIATION") {
          setValue(`${name}.affiliation`, []);
        } else if (value === "RELIGIONS") {
          setValue(`${name}.religions`, "");
        } else if (value === "SMOKING") {
          setValue(`${name}.smoking`, "");
        } else if (value === "DRINKING") {
          setValue(`${name}.drinking`, "");
        }
      } else {
        const oppositeGender =
          gender === "MALE" ? "femaleConditions" : "maleConditions";

        if (
          name === oppositeGender &&
          watch(`${name}.selectConditions`).length >= 2
        ) {
          return addToast({ content: "최대 2개까지 선택해주세요" });
        }
        setValue(`${name}.selectConditions`, [...currentBadges, value]);
      }
    };

  const handleClickButton = (data: createRoomForm): void => {
    if (!data.locations) return;

    const req = {
      body: {
        title: data.title,
        description: data.description,
        leaderUserId: myId!,
        locationIds: data.locations.map((item) => item.id),
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
      onSuccess: (res) => {
        navigate(`/meeting/${res.id}`, { replace: true });
      },
    });
  };

  const handleClickEditButton = (data: createRoomForm): void => {
    if (!data.locations) return;

    const req = {
      meetingId: meetingId!,
      body: {
        title: data.title,
        description: data.description,
        leaderUserId: myId!,
        locationIds: data.locations.map((item) => item.id),
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

    putEditRoom(req, {
      onSuccess: (res) => {
        navigate(`/meeting/${res.id}`, { replace: true });
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    reset({
      peopleCapacity: `${data.peopleCapacity}` ?? "2",
      title: data.title ?? "",
      description: data.description ?? "",
      maleConditions: {
        selectConditions: data.maleCondition.selectConditions ?? [],
        affiliation: data.maleCondition.affiliation ?? [],
        religions: data.maleCondition.religion.toString() ?? "",
        smoking: data.maleCondition.smoking.toString() ?? "",
        drinking: data.maleCondition.drinking.toString() ?? "",
        age: {
          minAge: data.maleCondition.minAge ?? 19,
          maxAge: data.maleCondition.maxAge ?? 50,
        },
        height: {
          minHeight: data.maleCondition.minHeight ?? 100,
          maxHeight: data.maleCondition.maxHeight ?? 250,
        },
      },
      femaleConditions: {
        selectConditions: data.femaleCondition.selectConditions ?? [],
        affiliation: data.femaleCondition.affiliation ?? [],
        religions: data.femaleCondition.religion.toString() ?? "",
        smoking: data.femaleCondition.smoking.toString() ?? "",
        drinking: data.femaleCondition.drinking.toString() ?? "",
        age: {
          minAge: data.femaleCondition.minAge ?? 19,
          maxAge: data.femaleCondition.maxAge ?? 50,
        },
        height: {
          minHeight: data.femaleCondition.minHeight ?? 100,
          maxHeight: data.femaleCondition.maxHeight ?? 250,
        },
      },
    });
  }, [data]);

  return {
    watch,
    setValue,
    clearErrors,
    control,
    register,
    handleSubmit,
    handleSelectConditions,
    handleClickButton,
    handleClickEditButton,
  };
};

export default useCreateRoom;
