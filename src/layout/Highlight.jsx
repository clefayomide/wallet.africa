import React from "react";

const HighlightWrapper = ({ classNames, children }) => {
  return <div className={`flex flex-col ${classNames}`}>{children}</div>;
};

export default HighlightWrapper;
