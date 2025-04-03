import { LinkArrow } from "@/components/ui";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  bgColor?: string;
  textwhite?: boolean;
}

export const ProjectCard: React.FC<Props> = ({
  className,
  textwhite = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-[4px] overflow-hidden border border-black grid grid-cols-2",
        textwhite ? "text-white" : "text-black"
      )}
    >
      <div className="p-8">
        <div className="flex flex-wrap font-medium leading-[100%] gap-4 text-[14px]">
          <p>Дизайн</p>
          <p>Верстка</p>
          <p>Wordpress</p>
          <p>Под ключ</p>
        </div>

        <h3 className="mt-5 text-[20px] leading-[120%] font-semibold uppercase">
          Заголовок длинный или короткий, но максимум в две строки, должно
          хватить на все!
        </h3>

        <p
          className={clsx("mt-4 text-gray-text", textwhite && "text-white/80")}
        >
          Следует отметить, что постоянный количественный рост и сфера нашей
          активности говорит о возможностях поставленных обществом задач.
          Идейные соображения высшего порядка...
        </p>

        <div className="flex mt-10 justify-between items-center text-accent font-semibold">
          <p>Сделали за 24 дня</p>
          <p>от 120 000 руб</p>
        </div>

        <div
          className={clsx(
            "my-4 h-[1px] w-full bg-black/20",
            textwhite && "bg-white/20"
          )}
        ></div>

        <div className="flex justify-end">
          <LinkArrow variant={textwhite ? "white" : "default"}>
            Смотреть полный кейс
          </LinkArrow>
        </div>
      </div>
      <div className="pl-4"></div>
    </div>
  );
};
