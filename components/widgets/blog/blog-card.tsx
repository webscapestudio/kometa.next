import { LinkArrow } from "@/components/ui";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const BlogCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "rounded-[4px_4px_0_0] overflow-hidden")}>
      <div className="aspect-[16/9] relative">
        <Image src={"/images/blog.png"} fill alt={""} />
      </div>

      <div className="p-4 border-gray-light border rounded-[0_0_4px_4px]">
        <div className="flex flex-wrap gap-2 text-[14px] leading-[100%] text-gray">
          <p>#маркетинг</p>
          <p>#seo</p>
          <p>#vuejs</p>
        </div>
        <h3 className="mt-3 text-[20px] font-semibold leading-[120%]">
          Заголовок, на любую тему, например история успеха
        </h3>
        <p className="text-gray-text mt-3 text-[16px] leading-[150%] line-clamp-3">
          Краткое описание о чем это статья. Возможно байт или просто вывод
          оттуда, который мог бы зацепть, но важно сделать его коротким, а в кое
          оттуда, который мог бы зацепть, но важно сделать его коротким, а в кое
          оттуда, который мог бы зацепть, но важно сделать его коротким, а в кое
        </p>

        <div className="mt-3 flex justify-end">
          <LinkArrow>Читать полностью</LinkArrow>
        </div>
      </div>
    </div>
  );
};
