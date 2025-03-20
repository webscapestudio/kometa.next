import React from "react";

export const CallButton = () => {
  return (
    <button className="flex items-center gap-3 leading-none bg-black-text text-white py-4 rounded-[8px] font-medium pl-4 pr-5 transition-all duration-300 hover:opacity-90">
      <div className="relative w-4 h-4">
        <div className="w-4 h-4 rounded-full bg-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-4 h-4 rounded-full bg-accent animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <span>Обсудить проект</span>
    </button>
  );
};
