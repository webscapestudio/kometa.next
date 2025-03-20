import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { CallButton } from "./CallButton";
import { ChevronDown, PhoneCall } from "lucide-react";
import { HeaderLink } from "./HeaderLink";

const links = [
  {
    name: "Услуги",
    slug: "uslugi",
    chevron: true,
  },
  {
    name: "Наши работы",
    slug: "portfolio",
  },
  {
    name: "Контакты",
    slug: "kontakty",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-gray-light py-3 border-b  z-10">
      <div className="container">
        <div className="flex items-center">
          <Logo />
          <div className="flex  ml-[64px] gap-8">
            {links.map((link) => (
              <HeaderLink
                key={link.slug}
                name={link.name}
                slug={link.slug}
                chevron={link.chevron}
              />
            ))}
          </div>

          <div className="ml-auto flex items-center gap-8">
            <Link
              href="tel:+7 993 338 08 88"
              className="flex items-center gap-2 font-semibold leading-none transition-all duration-300 hover:text-accent"
            >
              <PhoneCall size={18} />
              <span>+7 993 338 08 88</span>
            </Link>
            <CallButton />
          </div>
        </div>
      </div>
    </header>
  );
};
