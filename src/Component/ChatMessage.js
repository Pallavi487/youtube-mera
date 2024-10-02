import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 bg-slate-100"
        alt="users"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdKxIRjksVafQ72NgTnGQ6uvATF9jUgD_Pw&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
