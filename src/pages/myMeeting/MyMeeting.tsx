import { Header, Tab } from "components";
import * as S from "./MyMeeting.styled";
import { JoinMeeting, WaitMeeting } from "./containers";

const MyMeeting = () => {
  const tabs = {
    "참가 미팅": <WaitMeeting />,
    "대기 미팅": <JoinMeeting />,
  };

  return (
    <>
      <Header css={S.header}>내미팅</Header>
      <Tab tabList={["참가 미팅", "대기 미팅"]} tabs={tabs} />
    </>
  );
};

export default MyMeeting;
