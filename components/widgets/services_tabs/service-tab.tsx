import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  title: String;
}

export const ServiceTab: React.FC<Props> = ({ className, title }) => {
  return (
    <button
      className={clsx(
        "border border-gray-light rounded-[4px] py-2 px-4 leading-none transition-colors duration-300 hover:border-black hover:bg-accent hover:text-white max-[1201px]:text-[14px]"
      )}
    >
      {title}
    </button>
  );
};
