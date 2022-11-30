import React from "react";

const Wrapper = ({ children, classNames }) => {
  return (
    <div className={`w-full pb-10 md:pb-0 h-full flex ${classNames}`}>
      {children}
    </div>
  );
};

export default Wrapper;
