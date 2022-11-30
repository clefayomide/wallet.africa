import React from "react";

const Card = ({ background, children }) => {
  return (
    <section className={`w-full 2xl:w-[1500px] overflow-y-scroll md:overflow-hidden h-full xl:h-screen bg-[url(${background})]`}>
      {children}
    </section>
  );
};

export default Card;
