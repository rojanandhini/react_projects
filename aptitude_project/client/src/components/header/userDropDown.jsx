import React from "react";
import { Link } from "react-router-dom";

const UserDropDown = () => {
  return (
    <div className="w-[75%] mx-auto">
      <div className="w-[150px] flex flex-col border backdrop-blur-md rounded-xl text-[#1506e7] py-5 px-3 gap-2">
        <Link to="" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-pen-icon lucide-user-pen mr-2"
          >
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <circle cx={10} cy={7} r={4} />
          </svg>
          Profile
        </Link>
        <Link to="" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clipboard-check-icon lucide-clipboard-check mr-2"
          >
            <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="m9 14 2 2 4-4" />
          </svg>
          My tests
        </Link>
        <Link to="" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trending-up-icon lucide-trending-up mr-2"
          >
            <path d="M16 7h6v6" />
            <path d="m22 7-8.5 8.5-5-5L2 17" />
          </svg>
          My Stats
        </Link>
        <Link to="" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-log-out-icon lucide-log-out mr-2"
          >
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserDropDown;
