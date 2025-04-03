import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const ServiceItem: React.FC<Props> = ({ className }) => {
  return (
    <Link
      href={"/"}
      className={clsx(
        className,
        "border h-[180px] flex flex-col border-gray-light rounded-[4px] p-4 group transition-all duration-300 ease hover:border-black"
      )}
    >
      <div className="mt-auto">
        <div className="flex items-end gap-2 ">
          <h3 className="grow font-medium text-[18px] leading-[130%]">
            Разработка одностраничных сайтов
          </h3>
          <div className="w-8 h-8 rounded-full border border-black shrink-0 flex items-center justify-center transition-all duration-200 group-hover:-rotate-45  group-hover:bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="group-hover:stroke transition-all duration-200"
              fill="none"
              stroke="#252422"
            >
              <path
                d="M5 12H19"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="rounded-[2px] h-[2px] w-[96px] mt-2 bg-accent"></div>

        <p className="text-gray-text mt-2 transition-all">
          Краткое описание услуги
        </p>
      </div>
    </Link>
  );
};
