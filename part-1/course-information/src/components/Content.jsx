import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const partList = parts.map(part => <Part key={part.name} part={part} />);

  return partList;
};

export default Content;
