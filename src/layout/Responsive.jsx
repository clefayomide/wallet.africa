import React from "react";

const Responsive = ({ children, classNames }) => {
  return <div className={`${classNames} flex justify-center`}>{children}</div>;
};

export default Responsive;
