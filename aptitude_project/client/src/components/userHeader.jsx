import React from "react";
import { Link } from "react-router-dom";

import NameAndLogo from "./header/nameAndLogo";
import UserBurger from "./header/userBurger";

const UserHeader = () => {
  return (
    <div className="w-[75%] mx-auto my-2 p-3 flex justify-between">
      <Link to="/">
        <NameAndLogo />
      </Link>
      <UserBurger/>
    </div>
  );
};

export default UserHeader;
