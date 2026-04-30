import React from "react";
import UserDropDown from "./userDropDown";

const UserBurger = () => {
  return (
    <div className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f04b14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
      >
        <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
        <circle cx={12} cy={11} r={4} />
        <circle cx={12} cy={12} r={10} />
      </svg>

      <div className="w-full right-0 pt-2 absolute hidden group-hover:block">
        <UserDropDown/>
      </div>
    </div>
  );
};

export default UserBurger;
