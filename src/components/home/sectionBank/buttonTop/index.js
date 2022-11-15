import { useState } from "react";
import { StylebuttonTop, StyleContentButtons } from "./styles";

const buttons = [
  {
    name: "para você",
  },
  {
    name: "para sua empresa",
  },
];

export function ButtonTop() {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <StyleContentButtons>
        {buttons.map((item, index) => {
          return (
            <StylebuttonTop
              onClick={() => toggle(index)}
              className={selected === index ? "active" : ""}
              key={index}
            >
              {item.name}
            </StylebuttonTop>
          );
        })}
      </StyleContentButtons>
    </>
  );
}
