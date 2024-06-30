//TODO: 추후 삭제

const toastContext = {
  content: "토스트 테스트중",
};

const carouselData = [
  {
    id: 1,
    title: "첫번째 타이틀",
    content: "첫번째 요소",
    img: "vite.svg",
  },
  {
    id: 2,
    title: "두번째 타이틀",
    content: "두번째 요소",
    img: "vite.svg",
  },
  {
    id: 3,
    title: "세번째 타이틀",
    content: "세번째 요소",
    img: "vite.svg",
  },
];

const info = { location: "서울", company: "회사", job: "직업" };
const keywords = ["키", "특징", "특징"];

const tabList = ["tabLabel1", "tabLabel2"];

const tabs: { [key: string]: React.ReactNode } = {
  tabLabel1: <div>첫번째 탭</div>,
  tabLabel2: <div>두번째 탭</div>,
};

export { toastContext, carouselData, info, keywords, tabList, tabs };
