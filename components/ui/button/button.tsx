import clsx from "clsx";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outlined" | "accent";
  href?: string;
}

export const Button: React.FC<Props> = ({
  className,
  children,
  variant = "default",
}) => {
  return (
    <button
      className={clsx(
        "py-4 px-8 rounded-[4px] leading-[100%] border border-black transition-colors duration-300",
        className,
        variant === "default" && "bg-black text-white hover:bg-accent",
        variant === "outlined" &&
          "border border-accent text-accent bg-transparent"
      )}
    >
      {children}
    </button>
  );
};
