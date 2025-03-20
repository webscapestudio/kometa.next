import React from "react";

export const CallButton = () => {
  return (
    <button className="flex items-center gap-3 leading-none bg-black-text text-white py-4 rounded-[8px] font-medium pl-4 pr-4">
      <div className="w-4 h-4 rounded-full bg-accent"></div>
      <span>Обсудить проект</span>
    </button>
  );
};
