import React, { useState } from "react";

import * as S from "./Tab.styled";

interface TabProps {
  tabList: string[];
  tabs: { [key: string]: React.ReactNode };
}

const Tab = ({ tabList, tabs }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(tabList[0] ?? "");

  const handleClickTab = (tab: string) => (): void => {
    setCurrentTab(tab);
  };

  return (
    <S.Tab>
      <S.TabLabelWrapper>
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
