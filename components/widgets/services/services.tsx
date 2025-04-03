import { Button, Title } from "@/components/ui";
import clsx from "clsx";
import React from "react";
import { ServiceItem } from "./service-item";

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx("mt-[120px]", className)}>
      <div className="container">
        <Title tag="h2">Услуги</Title>
        <p className="mt-2 text-gray-text w-1/2">
          Нужен ли тут текст о том, что наши цены понятны и прозрачны. Что
          каждый этап понятен по срокам и внесение изменений не вляет критически
          на цену и итд???
        </p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>

        <div className="flex mt-4 justify-end">
          <Button>Все услуги</Button>
        </div>
      </div>
    </section>
  );
};
