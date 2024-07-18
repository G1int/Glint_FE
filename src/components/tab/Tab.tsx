import React, { useState } from "react";

import * as S from "./Tab.styled";

interface TabProps {
  className?: string;
  tabList: string[];
  tabs: { [key: string]: React.ReactNode };
}

const Tab = ({ className, tabList, tabs }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(tabList[0] ?? "");

  const handleClickTab = (tab: string) => (): void => {
    setCurrentTab(tab);
  };

  return (
    <S.Tab className={className}>
      <S.TabLabelWrapper columns={tabList.length}>
        {tabList.map((tab) => (
          <S.TabButton
            key={tab}
            isSelected={tab === currentTab}
            onClick={handleClickTab(tab)}
          >
            {tab}
          </S.TabButton>
        ))}
      </S.TabLabelWrapper>
      {tabs[currentTab]}
    </S.Tab>
  );
};

export default Tab;
