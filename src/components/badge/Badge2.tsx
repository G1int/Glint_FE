import { useEffect, useState } from "react";
import * as S from "./Badge.styled";

interface BadgeListType {
  id: string;
  label: string;
  color: string;
}

interface BadgeProps {
  children?: React.ReactNode;
  isClickable?: boolean;
  list?: BadgeListType[];
  size?: "sm" | "lg";
  disabled?: boolean;
}

const Badge2 = ({
  children,
  isClickable,
  list,
  size,
  disabled,
}: BadgeProps) => {
  const [badgeList, setBadgeList] = useState<BadgeListType[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  // 얘로 map을 돌려야해서 선택한애를 반영해야 해서 useEffect를 쓰긴했는데
  // 맞는방법인지 모르겠습니다
  useEffect(() => {
    if (list) {
      setBadgeList(list);
    }
  }, [list]);

  const handleBadgeClick = (id: string) => {
    const index = selectedBadges.findIndex((badge) => badge === id);

    if (index === -1) {
      setSelectedBadges([...selectedBadges, id]);
    } else {
      setSelectedBadges(selectedBadges.filter((badge) => badge !== id));
    }

    const updateBadges = badgeList.map((badge) =>
      badge.id === id
        ? { ...badge, color: index === -1 ? "red" : "#ced4da" }
        : badge
    );
    setBadgeList(updateBadges);
  };

  console.log("badgelist", badgeList);

  return badgeList.length > 0 ? (
    badgeList.map((badge) => (
      <S.Badge
        isClickable={isClickable}
        disabled={disabled}
        onClick={() => handleBadgeClick(badge.id)}
        color={badge.color}
      >
        {badge.label}
      </S.Badge>
    ))
  ) : (
    <S.Badge
      size={size}
      isClickable={isClickable}
      //   onClick={() => handleBadgeClick(children)}
      disabled={disabled}
    >
      {children}
    </S.Badge>
  );
};

export default Badge2;
