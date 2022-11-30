import React from "react";
import { Heading, Paragraph } from "../typography/Typography";

const Highlight = ({
  textHeading,
  textParagraph,
  sizeHeading,
  sizeParagraph,
  colorHeading,
  colorParagraph,
  borderLeft,
  icon,
}) => {
  return (
    <div className={`lg:w-[440px] ${borderLeft} pl-5`}>
      {icon && icon}
      <Heading text={textHeading} size={sizeHeading} color={colorHeading} />
      <Paragraph
        text={textParagraph}
        size={sizeParagraph}
        color={colorParagraph}
      />
    </div>
  );
};

export default Highlight;
