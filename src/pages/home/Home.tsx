import { useEffect, useMemo } from "react";

import { Badge, Button, Input, Modal } from "components";
import { useBadge, useModal, useToast } from "hooks";
import { badgeState } from "atoms";
import { useSetRecoilState } from "recoil";

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();
  const { handleClickBadge, badgeDataState } = useBadge();

  // test
  const badgeList = useMemo(
    () => [
      { id: "회사", label: "회사", isClickable: true, color: "#ced4da" },
      { id: "직업", label: "직업", isClickable: true, color: "#ced4da" },
      { id: "소득", label: "소득", isClickable: true, color: "#ced4da" },
      { id: "자산", label: "자산", isClickable: true, color: "#ced4da" },
    ],
    []
  );

  const setBadgeList = useSetRecoilState(badgeState);

  useEffect(() => {
    setBadgeList(badgeList);
  }, [badgeList, setBadgeList]);

  const toastContext = {
    content: "토스트 테스트중",
  };

  return (
    <>
      home
      <button onClick={() => addToast(toastContext)}>toast 테스트</button>
      <Input handleChange={() => console.log("hi")} />
      <Button
        size="sm"
        onClick={() =>
          handleOpenModal({ title: "Modal Title", content: "content!" })
        }
      >
        Open
      </Button>
      <Badge size="sm" disabled>
        disabled
      </Badge>
      {badgeDataState.map((badge) => (
        <Badge
          key={badge.id}
          size="sm"
          color={badge.color}
          isClickable={badge.isClickable}
          onClick={() => handleClickBadge(badge, "red")} // 클릭했을 때, badge 색상
        >
          {badge.label}
        </Badge>
      ))}
      <Modal />
    </>
  );
};

export default Home;
