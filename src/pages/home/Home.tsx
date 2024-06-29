import { Button, Input, Modal, Toggle } from "components";
import Badge2 from "components/badge/Badge2";
import { useModal, useToast } from "hooks";

// 예시 list
const badgeExList = [
  { id: "회사", label: "회사", color: "#ced4da" },
  { id: "직업", label: "직업", color: "#ced4da" },
  { id: "소득", label: "소득", color: "#ced4da" },
  { id: "자산", label: "자산", color: "#ced4da" },
];

const Home = () => {
  const { addToast } = useToast();
  const { handleOpenModal } = useModal();
  // const { handleClickBadge, badgeDataState } = useBadge();

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
      <Badge2 size="sm" disabled>
        disabled
      </Badge2>
      <Badge2 isClickable={true} list={badgeExList} />
      {/* {badgeExList.map((badge) => (
        <Badge key={badge.id} size="sm" isClickable={badge.isClickable}>
          {badge.label}
        </Badge>
      ))} */}
      <Toggle />
      <Modal />
    </>
  );
};

export default Home;
