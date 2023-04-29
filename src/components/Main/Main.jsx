import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";

const array = [];
for (let i = 0; i < 9; i++) {
  array.push(<Card key={i} />);
}
const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "60px",
      }}
    >
      <Jumbotron />
      {array}
    </div>
  );
};

export default Main;
