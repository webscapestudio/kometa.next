import { clsx } from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export const FeaturesMarquee: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "my-[120px] leading-[150%] font-bold text-gray-light flex gap-10 uppercase text-[48px] text-nowrap"
      )}
    >
      <p>100+ ПРОЕКТОВ</p>
      <p>25+ ПРОФЕССИОНАЛОВ</p>
      <p>7+ ЛЕТ ОПЫТА</p>
      <p>100+ ПРОЕКТОВ</p>
      <p>25+ ПРОФЕССИОНАЛОВ</p>
      <p>7+ ЛЕТ ОПЫТА</p>
      <p>100+ ПРОЕКТОВ</p>
      <p>25+ ПРОФЕССИОНАЛОВ</p>
      <p>7+ ЛЕТ ОПЫТА</p>
    </div>
  );
};
