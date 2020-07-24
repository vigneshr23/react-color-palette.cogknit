import React, { Component, useState } from "react";
import Palette from "./palette";
import Controls from "./controls";

const Overview = () => {
  const [count, setCount] = useState("");
  const [selected, setSelected] = useState("");

  const onClick = ({ type, count }) => {
    if (type === "CLEAR") setSelected("");
    setCount(count);
  };

  const onColorSelect = (color) => setSelected(color);

  console.log({ count });
  return (
    <div className="container overview">
      <Palette
        count={count}
        onColorSelect={onColorSelect}
        selected={selected}
      />
      <Controls onClick={onClick} selected={selected} />
    </div>
  );
};
export default Overview;
