import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useNavigationStore } from "@/store/navigation";

interface HeaderLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  slug?: string;
  chevron?: boolean;
}

export const HeaderLink = ({
  name,
  slug,
  chevron = false,
  ...props
}: HeaderLinkProps) => {
  const { isOpen } = useNavigationStore();

  return slug ? (
    <Link
      href={slug}
      className="font-semibold flex items-center gap-1 transition-all duration-300 hover:text-accent"
    >
      <span>{name}</span>
      {chevron && <ChevronDown size={20} strokeWidth={2} />}
    </Link>
  ) : (
    <button
      className={classNames(
        "font-semibold flex items-center gap-1 transition-all duration-300 hover:text-accent",
        {
          ["text-accent"]: isOpen,
        }
      )}
      {...props}
    >
      <span>{name}</span>
      {chevron && (
        <ChevronDown
          size={20}
          strokeWidth={2}
          className={classNames("", {
            "rotate-180": isOpen,
          })}
        />
      )}
    </button>
  );
};
