import React from "react";

import { services_tabs_data } from "../../../db";
import { Title } from "@/components/ui";
import { ServiceTab } from "./service-tab";

interface Props {
  className?: string;
}

export const ServicesTabs: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div className="container">
        <Title tag="h2">Мы классно делаем:</Title>
        <div className="flex gap-2 mt-4 flex-wrap">
          {services_tabs_data.map((tab, index) => (
            <ServiceTab key={tab.id} title={tab.title} />
          ))}
        </div>

        <div className="mt-2">
          <div className="border border-gray-light p-6 rounded-[8px] max-[1441px]:p-4 ">
            <div className="">
              <h3 className="text-[20px] leading-[130%] font-medium max-[1441px]:text-[18px]">
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
