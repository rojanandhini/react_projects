import React from "react";
import icon from "../../assets/icon.png";
const NameAndLogo = () => {
  return (
    <div className="flex">
      <img src={icon} alt="Logo" />
      <h1 className="text-xl lg:text-3xl font-serif font-semibold text-teal-600 md:text-nowrap">
        Aptitude <span className="text-[#9d45ef]">Advantage</span>
      </h1>
    </div>
  );
};

export default NameAndLogo;
