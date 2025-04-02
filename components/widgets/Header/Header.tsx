import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { CallButton } from "./CallButton";
import { Mail, PhoneCall } from "lucide-react";
import { HeaderLink } from "./HeaderLink";
import { Burger } from "@/components/ui";

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
    <header className="sticky top-0 bg-white pt-3 z-10 max-[1201px]:pt-2">
      <div className="container">
        <div className="flex items-center border-gray-light border-b pb-3 max-[1201px]:pb-2">
          <Logo />
          <div className="flex ml-[64px] gap-6 max-[1441px]:ml-10 max-[1025px]:hidden">
            {links.map((link) => (
              <HeaderLink
                key={link.slug}
                name={link.name}
                slug={link.slug}
                chevron={link.chevron}
              />
            ))}
          </div>

          <div className="ml-auto flex items-center gap-8 max-[1201px]:gap-4">
            <Link
              href="tel:+7 993 338 08 88"
              className="flex items-center gap-2 font-semibold leading-none transition-all duration-300 hover:text-accent"
            >
              <Mail size={20} />
              <span className="max-[1201px]:hidden">hello@kometa.team</span>
            </Link>

            <Link
              href="tel:+7 993 338 08 88"
              className="flex items-center gap-2 font-semibold leading-none transition-all duration-300 hover:text-accent"
            >
              <PhoneCall size={20} />
              <span className="max-[769px]:hidden">+7 993 338 08 88</span>
            </Link>

            <CallButton className="max-[551px]:hidden" />
            <Burger className="hidden max-[1025px]:block" />
          </div>
        </div>
      </div>
    </header>
  );
};
