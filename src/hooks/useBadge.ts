import { badgeState, selectedBadgeState } from "atoms";
import { useRecoilState } from "recoil";
import { Badge } from "types";

const useBadge = () => {
  const [badgeDataState, setBadgeDataState] = useRecoilState(badgeState);
  const [selectedBadgeDataState, setSelectedBadgeDataState] =
    useRecoilState(selectedBadgeState);

  const handleClickBadge = (clickedBadge: Badge, color: string) => {
    if (clickedBadge.isClickable) {
      const index = selectedBadgeDataState.findIndex(
        (badge) => badge.id === clickedBadge.id
      );

      if (index === -1) {
        // 선택하지 않은 경우, 선택 목록에 추가
        setSelectedBadgeDataState([...selectedBadgeDataState, clickedBadge]);
      } else {
        // 이미 선택한 경우, 선택 목록에서 제거
        setSelectedBadgeDataState(
          selectedBadgeDataState.filter((badge) => badge.id !== clickedBadge.id)
        );
      }

      const updateBadges = badgeDataState.map((badge) =>
        badge.id === clickedBadge.id
          ? { ...badge, color: index === -1 ? color : "#ced4da" }
          : badge
      );
      setBadgeDataState(updateBadges);
    }
  };

  return {
    badgeDataState,
    handleClickBadge,
    selectedBadgeDataState,
  };
};

export default useBadge;
