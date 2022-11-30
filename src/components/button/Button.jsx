import React from "react";

const Button = ({ element, icon, width }) => {
  return (
    <button
      className={`h-button rounded ${
        icon ? "bg-white text-button" : "bg-button text-white"
      } ${width} font-IBM`}
    >
      {element}
    </button>
  );
};

export default Button;
