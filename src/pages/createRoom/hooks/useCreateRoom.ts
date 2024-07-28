import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SELECT_CONDITIONS } from "assets";
import { usePostCreateRoom } from "services";
import type { createRoomForm } from "types";

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

const useCreateRoom = () => {
  const navigate = useNavigate();

  const { watch, setValue, clearErrors, register, control, handleSubmit } =
    useForm<createRoomForm>({
      defaultValues: initForm,
      mode: "onTouched",
    });

  const myId = sessionStorage.getItem("id");

  const { mutate: postCreateRoom } = usePostCreateRoom();

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

  return {
    watch,
    setValue,
    clearErrors,
    control,
    register,
    handleSubmit,
    handleSelectConditions,
    handleClickButton,
  };
};

export default useCreateRoom;
