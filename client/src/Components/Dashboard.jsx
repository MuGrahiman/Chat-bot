import React from "react";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-3 h-[calc(100vh-4.5rem)] w-full">
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default Dashboard;
