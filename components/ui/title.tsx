import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ className, tag = "h2", children }) => {
  switch (tag) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return (
        <div className="flex items-start gap-4">
          <div className="flex items-center mt-[10px]">
            <div className="h-[2px] bg-accent w-10"></div>
            <div className="rounded-full border-2 border-accent w-4 h-4"></div>
          </div>
          <h2
            className={classNames(
              className,
              "uppercase font-bold text-[32px] leading-[120%]"
            )}
          >
            {children}
          </h2>
        </div>
      );
  }
};
