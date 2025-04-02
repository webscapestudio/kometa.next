import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export const Burger: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, "w-[18px] h-[20px] relative")}>
      <span className="bg-black h-[2px] w-full rounded-xl top-[4px] absolute left-0"></span>
      <span className="bg-black h-[2px] w-full rounded-xl absolute top-[9px] left-0"></span>
      <span className="bg-black h-[2px] w-full rounded-xl bottom-[4px] absolute left-0"></span>
    </div>
  );
};
