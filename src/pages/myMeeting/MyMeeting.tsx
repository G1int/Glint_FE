import { BackLayout, Tab } from "components";
import * as S from "./MyMeeting.styled";
import { JoinMeeting, WaitMeeting } from "./containers";

const MyMeeting = () => {
  const tabs = [
    { label: "참가 미팅", query: "accepted", component: <JoinMeeting /> },
    { label: "대기 미팅", query: "waiting", component: <WaitMeeting /> },
  ];

  return (
    <>
      <BackLayout css={S.backLayout} title="내미팅" hasTopContent>
        <Tab tabList={["참가 미팅", "대기 미팅"]} tabs={tabs} />
      </BackLayout>
    </>
  );
};

export default MyMeeting;
