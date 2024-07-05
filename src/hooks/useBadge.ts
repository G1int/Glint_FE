import { useState } from "react";

const useBadge = () => {
  const [selectedBadges, setIsSelectedBadges] = useState<string[]>([]);

  const handleClickBadge = (e: React.MouseEvent) => {
    const target = (e.target as HTMLButtonElement).innerText;
    const findSameTarget = selectedBadges.find((item) => item === target);

    if (findSameTarget) {
      setIsSelectedBadges(selectedBadges.filter((item) => item !== target));
    } else {
      setIsSelectedBadges([...selectedBadges, target]);
    }
  };

  return {
    selectedBadges,
    handleClickBadge,
  };
};

export default useBadge;
