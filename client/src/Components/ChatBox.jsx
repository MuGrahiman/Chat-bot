import React from "react";

const ChatBox = () => {
  return (
    <div className="col-span-2 p-5 flex flex-col gap-4">
      <div className="  max-w-[calc(100%-10rem)]">
        <small></small>
        <span className="bg-slate-800 rounded ms-auto text-balance inline-block p-2 font-light">
          Impact of Ai on User Experiences
          alfkajdsfjaosi;rweajl;kfjsfuiaiofjaljerl;wjedfssssssssssssssssssssssssss
          sssssssssssssssssssss afaesetaeeeeeeeeeeee eeeeeeeeeeeeeeeee
          eeeeeeeeeeatttttttttttt ttttttttttttttaa aaaaaaaaaaaaaaaaaaaaaa
          a44444444444444444444rrql;jrwoqieurpowieruoiqwjrlsfa
          lksjflajsfa;oiruqwiorejlqjrlwjfklajfl;asjifaiojrwjrelqjwrifoafasjfklasj
        </span>
      </div>
      <div className="w-fit  max-w-[calc(100%-10rem)] ms-auto">
        <small></small>
        <span className="bg-slate-800 rounded  text-balance inline-block p-2 font-light">
          Impact of Ai on User Experiences
        </span>
      </div>
    </div>
  );
};

export default ChatBox;
const timeStamp = () => {
  const timestamp = new Date("2024-01-16T10:30:00");
  const time = timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = timestamp.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  console.log(time.toLowerCase() + ", " + date);
};

const conversations = [
  {
    user: "me",
    timestamp: "2024-01-16 10:30 AM",
    message: "Hello, how are you?",
  },
  {
    user: "ai",
    timestamp: "2024-01-16 10:31 AM",
    message: "I'm doing well, thank you. How about you?",
  },
  {
    user: "me",
    timestamp: "2024-01-16 10:32 AM",
    message: "I'm good too, thanks for asking.",
  },
  {
    user: "ai",
    timestamp: "2024-01-16 10:33 AM",
    message: "That's great to hear!",
  },
  {
    user: "me",
    timestamp: "2024-01-16 10:34 AM",
    message: "What have you been up to today?",
  },
  {
    user: "ai",
    timestamp: "2024-01-16 10:35 AM",
    message: "I've been busy working on various tasks.",
  },
  {
    user: "me",
    timestamp: "2024-01-16 10:36 AM",
    message: "Sounds productive!",
  },
  {
    user: "ai",
    timestamp: "2024-01-16 10:37 AM",
    message: "Yes, it's been a busy day.",
  },
  {
    user: "me",
    timestamp: "2024-01-16 10:38 AM",
    message: "I understand. Take a break if you need to.",
  },
  {
    user: "ai",
    timestamp: "2024-01-16 10:39 AM",
    message: "Thanks, I will. Have a good day!",
  },
];
