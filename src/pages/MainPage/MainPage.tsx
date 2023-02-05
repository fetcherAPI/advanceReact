import React from "react";
import { Counter } from "../../Components/Counter";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <>
      <h1>MainPage</h1>
      <Counter />
    </>
  );
};

export default MainPage;
