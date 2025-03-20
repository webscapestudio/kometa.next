import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { CallButton } from "./CallButton";

const links = [
  {
    name: "Услуги",
    slug: "uslugi",
    children: [],
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

          <div className="flex font-semibold ml-[64px] gap-8">
            {links.map((link) => (
              <Link key={link.slug} href={`/${link.slug}`} className="">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="ml-auto">
            <CallButton />
          </div>
        </div>
      </div>
    </header>
  );
};
