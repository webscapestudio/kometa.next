import { Button, Title } from "@/components/ui";
import clsx from "clsx";
import React from "react";
import { BlogCard } from "./blog-card";

interface Props {
  className?: string;
}

export const Blog: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, "mt-[120px]")}>
      <div className="container">
        <Title tag="h2">Блог и статьи</Title>
        <p className="text-gray-text mt-2">
          Пишем, что бы повышать экспертность и вносить вклад. Стараемся над
          каждой статьей. И вообще текст о том, что нам нравится писать и
          делится опытом
        </p>

        <div className="grid gap-4 grid-cols-4 mt-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className="flex mt-4 justify-end">
          <Button className="w">Все статьи и новости</Button>
        </div>
      </div>
    </section>
  );
};
