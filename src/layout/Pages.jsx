import React from "react";

const Pages = ({ children, classNames }) => {
  return <div className={`${classNames} m-auto`}>{children}</div>;
};

export default Pages;
