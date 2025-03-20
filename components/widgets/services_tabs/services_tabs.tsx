import React from "react";

interface Props {
  className?: string;
}

export const ServicesTabs: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="flex gap-2">
          <button className="border border-black rounded-md py-2 px-4 leading-none transition-colors duration-300 hover:bg-accent hover:text-white">
            Дизайн и брендинг
          </button>
        </div>

        <div className="mt-2">
          <div className="border border-gray-light p-6 rounded-[8px]">
            <div className="">
              <h3 className="text-[20px] leading-[130%] font-medium">
                Разработаем уникальный дизайн, продумаем все мелочи и оставим
                <br />
                посетителя счастливым. Покажем сильные стороны и выделим на фоне
                конкурентов.
              </h3>
              <p className="mt-2 text-gray-text">
                Но повышение уровня гражданского сознания позволяет выполнить
                важные задания по разработке системы обучения кадров,
                соответствующей насущным потребностям.
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <p className="text-accent font-medium">figma, adobe xd</p>
              <p className="text-accent font-medium">от 39 000 руб</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
