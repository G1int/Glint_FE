export const SELECT_DATA = [
  {
    title: "종교",
    options: [
      { label: "무교", key: "1" },
      { label: "기독교", key: "2" },
      { label: "천주교", key: "3" },
      { label: "불교", key: "4" },
      { label: "기타", key: "5" },
    ],
  },
  {
    title: "흡연",
    options: [
      { label: "비흡연", key: "2" },
      { label: "흡연", key: "1" },
    ],
  },
  {
    title: "음주",
    options: [
      { label: "마시지 않음", key: "1" },
      { label: "가끔 마심", key: "2" },
      { label: "어느정도 즐김", key: "3" },
      { label: "좋아하는 편", key: "4" },
      { label: "기타", key: "5" },
    ],
  },
] as const;
