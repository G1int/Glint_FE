import React from "react";

import { Input } from "components";

const Home = () => {
  return (
    <div>
      home
      <Input handleChange={() => console.log("hi")} />
    </div>
  );
};

export default Home;
