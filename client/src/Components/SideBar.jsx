import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrLineChart } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";
import { SlMusicToneAlt } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const SideBar = ({ children }) => {
  return (
    <section className="max-h-dvh flex">
      <div className="min-h-dvh w-24 p-2 bg-slate-800 flex flex-col items-center	">
        <img src="" alt="" />
        <h1>Logo</h1>
        <div className="flex flex-col gap-8 my-auto">
          <RxDashboard size="24" />
          <GrLineChart size="24" />
          <FiMessageSquare size="24" />
          <CiImageOn size="24" />
          <SlMusicToneAlt size="24" />
          <CiBookmark size="24" />
          <IoIosLogOut size="24" />
        </div>
      </div>
      {children}
    </section>
  );
};

export default SideBar;
