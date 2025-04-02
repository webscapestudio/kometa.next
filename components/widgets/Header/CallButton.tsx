import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export const CallButton: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={classNames(
        className,
        "flex items-center gap-3 leading-none bg-black-text text-white py-4 rounded-[8px] font-medium pl-4 pr-5 transition-all duration-300 hover:opacity-90 max-[1201px]:py-3 max-[1201px]:text-[14px]"
      )}
    >
      <div className="relative w-4 h-4">
        <div className="w-4 h-4 rounded-full bg-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-4 h-4 rounded-full bg-accent animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <span>Обсудить проект</span>
    </button>
  );
};
