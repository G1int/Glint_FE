import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import * as S from "./Tab.styled";

interface TabProps {
  className?: string;
  tabList: string[];
  tabs: { label: string; query: string; component: React.ReactNode }[];
}

const Tab = ({ className, tabList, tabs }: TabProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState(tabList[0] ?? "");

  const currentQuery = searchParams.get("tab");

  const handleClickTab = (tab: string) => (): void => {
    setCurrentTab(tab);

    const selectedTab = tabs.find((item) => item.label === tab);
    navigate(`?tab=${selectedTab?.query}`, { replace: true });
  };

  useEffect(() => {
    if (!currentQuery) return;
    const findQueryTab = tabs.find((tab) => tab.query === currentQuery)?.label;

    setCurrentTab(findQueryTab!);
  }, [currentQuery]);

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
      <S.TabContent>
        {tabs.find((tab) => tab.label === currentTab)?.component}
      </S.TabContent>
    </S.Tab>
  );
};

export default Tab;
