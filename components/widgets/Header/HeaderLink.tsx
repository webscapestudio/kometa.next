import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HeaderLinkProps {
  name: string;
  slug: string;
  chevron?: boolean;
}

export const HeaderLink = ({
  name,
  slug,
  chevron = false,
}: HeaderLinkProps) => {
  return (
    <Link
      href={slug}
      className="font-semibold flex items-center gap-1 transition-all duration-300 hover:text-accent"
    >
      <span>{name}</span>
      {chevron && <ChevronDown size={20} strokeWidth={2} />}
    </Link>
  );
};
