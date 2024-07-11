import { Dropdown } from "components";

const options = [
  { label: "무교", value: "무교" },
  { label: "기독교", value: "기독교" },
  { label: "불교", value: "불교" },
];

const Home = () => {
  return (
    <div>
      <Dropdown title="종교" options={options} placeholder="종교 선택" />
    </div>
  );
};

export default Home;
