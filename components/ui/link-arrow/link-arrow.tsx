import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  variant?: "default" | "white";
}

export const LinkArrow: React.FC<Props> = ({
  className,
  children,
  variant = "default",
  href = "/",
}) => {
  return (
    <Link
      className={clsx(
        "flex items-center gap-2",
        className,
        variant == "white" && "text-white"
      )}
      href={href}
    >
      <span className="leading-[100%] underline">{children}</span>
      <div
        className={clsx(
          "w-8 h-8 rounded-full flex items-center justify-center border border-black",
          variant == "white" && "border-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke={variant == "white" ? "#fff" : "#252422"}
          fill="none"
        >
          <path d="M5 12H19" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 5L19 12L12 19"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};
