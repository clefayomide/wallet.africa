import React from "react";
import { Heading } from "../typography/Typography";
import { Paragraph } from "../typography/Typography";

const Items = ({ heading, lists }) => {
  return (
    <div className="w-[40%] md:w-auto flex flex-col gap-5">
      <Heading text={heading} color={"text-[#FFFFFF]"} size={"text-5"} />
      {lists.map((list) => (
        <Paragraph
          key={Math.random()}
          text={list}
          color={"text-[#FFFFFF] opacity-[0.6]"}
        />
      ))}
    </div>
  );
};

export default Items;
