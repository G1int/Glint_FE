//TODO: 추후 삭제
const toastContext = {
  content: "토스트 테스트중",
};

const info = { location: "서울", company: "회사", job: "직업" };
const keywords = ["키", "특징", "특징"];

const tabList = ["tabLabel1", "tabLabel2"];

const tabs: { [key: string]: React.ReactNode } = {
  tabLabel1: <div>첫번째 탭</div>,
  tabLabel2: <div>두번째 탭</div>,
};

const introduceInfo = {
  introduce:
    "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
  basicInfo: ["170cm", "무교", "비흡연", "비음주"],
  keywords: ["적극적", "ENTJ", "러닝"],
};

export { toastContext, info, keywords, tabList, tabs, introduceInfo };
