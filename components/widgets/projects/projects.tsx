import { Button, Title } from "@/components/ui";
import React from "react";
import { ProjectCard } from "../project-card/project-card";

interface Props {
  className?: string;
}

export const Projects: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div className="container">
        <Title tag="h2">Наши проекты</Title>
        <p className="mt-4 text-gray-text w-3/4">
          Но повышение уровня гражданского сознания позволяет выполнить важные
          задания по разработке системы обучения кадров, соответствующей
          насущным потребностям.
        </p>

        {/* List */}

        <div className="flex flex-col mt-10 gap-2">
          <ProjectCard className="bg-[#FFEF61]" />
          <ProjectCard className="bg-[#8D07E6]" textwhite />
          <ProjectCard className="bg-[#252422]" textwhite />
          <ProjectCard className="bg-[#5E35CF]" textwhite />
        </div>

        <div className="flex mt-2 justify-end">
          <Button className="w-1/4">Смотреть все кейсы (120)</Button>
        </div>
      </div>
    </section>
  );
};
