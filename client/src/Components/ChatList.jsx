import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineBackspace } from "react-icons/md";
const ChatList = () => {
  return (
    <div className="flex flex-col border-r-2 border-zinc-800 p-1 min-h-full w-full ">
      <h1 className="text-3xl mx-10 font-bold my-6">Text Generator</h1>
      <div className=" p-10 h-60 flex flex-col gap-3 overflow-y-scroll scroll-smoot">
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Impact of Ai on User Experiences</p>
        </span>
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Voice User Interface (VUI)</p>
        </span>
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Data-Drive UX</p>
        </span>
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Chatbots and Conversational AI</p>
        </span>
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Visual Recognition in UX</p>
        </span>
        <span className="bg-slate-800 flex rounded-full items-center  px-3 py-2 gap-3 font-light">
          <FiMessageSquare size="22" />
          <p>Ethical AI Design</p>
        </span>
      </div>
      <div className=" p-10  flex flex-col gap-3 mt-auto">
        <span className=" flex rounded-full text-green-700 border border-green-700 items-center  px-3 py-2 gap-3 font-light">
          <CiCirclePlus size="22" />
          <p>New Chat</p>
        </span>
        <span className=" flex rounded-full text-red-700 border border-red-700 items-center  px-3 py-2 gap-3 font-light">
          <MdOutlineBackspace size="22" />
          <p>Clear Coversation</p>
        </span>
      </div>
    </div>
  );
};

export default ChatList;
