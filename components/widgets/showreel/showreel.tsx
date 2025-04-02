import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export const Showreel: React.FC<Props> = ({ className }) => {
  return (
    <section className={classNames("", className)}>
      <div className="container">
        <div className="aspect-video bg-gray-light overflow-hidden rounded-[8px] max-[1201px]:rounded-[4px]">
          <video muted loop autoPlay className="w-full h-full object-cover">
            <source src="/Scene.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
