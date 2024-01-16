import React from "react";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const NavBar = () => {
  return (
    <nav className="bg-zinc-800	p-2 text-white flex  items-center justify-center">
      <form className="mx-auto my-2 ">
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-slate-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Anything"
            required
          />
          <div class="absolute inset-y-0 end-2.5 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
      <div className="flex gap-4 items-center justify-center">
        <span class="relative ">
          <FaRegBell size="24" />
          <span className="h-3 w-3 absolute top-0 end-0 inline-flex">
            <small class="rounded-full h-full w-full text-xs text-center   bg-green-300">
              2
            </small>
          </span>
        </span>
        <span className="flex gap-1 items-center justify-center">
          <FaRegUserCircle size="24" />
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
