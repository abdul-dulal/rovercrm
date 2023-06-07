import React from "react";
import { BiHome } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdRefresh } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { GoScreenFull } from "react-icons/go";
const TopHeader = () => {
  return (
    <div>
      <nav className="flex  space-x-4 py-3">
        {[
          ["Dashboard", "dashboard", <BiHome />],
          ["Hill Valley", "team", <CiLocationOn />],
          ["Hold", "projects", <MdRefresh />],
          ["Logout", "reports", <LuLogOut />],
          [<GoScreenFull />],
        ].map(([title, url, icon]) => (
          <li
            key={title}
            className="flex gap-1 cursor-pointer bg-primary list-none items-center px-3 py-1 text-[15px] font-normal text-white  rounded-sm"
          >
            <span> {icon}</span> {title}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default TopHeader;
