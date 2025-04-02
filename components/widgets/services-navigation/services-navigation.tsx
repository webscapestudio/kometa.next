"use client";

import classNames from "classnames";
import React from "react";
import { useNavigationStore } from "@/store/navigation";
import Link from "next/link";
import { Socials } from "@/components/ui";

interface Props {
  className?: string;
}

const servicesLinks = [
  {
    id: 1,
    name: "Разработка",
    links: [
      { id: 1, name: "Сайты на Wordpress", slug: "wordpress" },
      { id: 2, name: "Интернет-магазины", slug: "ecommerce" },
      { id: 3, name: "Корпоративные сайты", slug: "corporate-sites" },
      { id: 4, name: "Лендинги", slug: "landing-pages" },
      { id: 5, name: "Мобильные приложения", slug: "mobile-apps" },
    ],
  },
  {
    id: 2,
    name: "Маркетинг",
    links: [
      { id: 1, name: "SEO-продвижение", slug: "seo" },
      { id: 2, name: "Контекстная реклама", slug: "ppc" },
      { id: 3, name: "SMM", slug: "smm" },
      { id: 4, name: "Email-маркетинг", slug: "email-marketing" },
    ],
  },
  {
    id: 3,
    name: "Дизайн",
    links: [
      { id: 1, name: "UI/UX дизайн", slug: "ui-ux" },
      { id: 2, name: "Логотипы", slug: "logos" },
      { id: 3, name: "Брендинг", slug: "branding" },
      { id: 4, name: "Иллюстрации", slug: "illustrations" },
    ],
  },
];

export const ServicesNavigation: React.FC<Props> = ({ className }) => {
  const { isOpen } = useNavigationStore();
  return (
    <div
      className={classNames(
        className,
        "fixed bg-white z-10 w-full h-full -top-full transition-all duration-300",
        {
          ["top-[73px]"]: isOpen,
        }
      )}
    >
      <div className="container">
        <div className="flex flex-col gap-[80px] mt-20">
          <div className="grid grid-cols-4 gap-4">
            {servicesLinks.map((item) => (
              <div className="" key={item.id}>
                <h4 className="text-[24px] leading-[120%] font-medium ">
                  {item.name}
                </h4>

                <nav className="mt-6 flex flex-col gap-4 ">
                  {item.links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.slug}
                      className="font-medium text-gray-text leading-[120%]  transition-all duration-300 hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <hr className="my-10 text-gray-light " />
          <div className="">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};
