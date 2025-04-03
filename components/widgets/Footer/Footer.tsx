import Link from "next/link";
import React from "react";
import { FooterLogo } from "./footer-logo";
import { Mail, PhoneCall } from "lucide-react";
import { Socials } from "@/components/ui";

const footerLinks = [
  { title: "Наши работы", id: 1, href: "/" },
  { title: "Контакты", id: 2, href: "/" },
  { title: "Блог", id: 3, href: "/" },
  { title: "Услуги", id: 4, href: "/" },
];

const footerLinksServices = [
  {
    title: "Услуги",
    id: 1,
    links: [
      { id: 1, title: "Разработка сайтов", href: "/" },
      { id: 2, title: "Разработка приложений", href: "/" },
      { id: 3, title: "SEO-оптимизация", href: "/" },
      { id: 4, title: "Техническая поддержка", href: "/" },
    ],
  },
  {
    title: "По технологиям",
    id: 2,
    links: [
      { id: 1, title: "Сайты на React", href: "/" },
      { id: 2, title: "Сайты на Next.js", href: "/" },
      { id: 3, title: "Сайты на Vue.js", href: "/" },
      { id: 4, title: "Сайты на Angular", href: "/" },
    ],
  },
  {
    title: "По типам",
    id: 3,
    links: [
      { id: 1, title: "Корпоративные сайты", href: "/" },
      { id: 2, title: "Интернет-магазины", href: "/" },
      { id: 3, title: "Лендинги", href: "/" },
      { id: 4, title: "Порталы", href: "/" },
    ],
  },
  {
    title: "По направлениям",
    id: 4,
    links: [
      { id: 1, title: "Финтех", href: "/" },
      { id: 2, title: "Образование", href: "/" },
      { id: 3, title: "Медицина", href: "/" },
      { id: 4, title: "Туризм", href: "/" },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="mt-10 bg-black text-white py-10">
        <div className="container">
          {/* Top */}
          <div className="flex items-center">
            <FooterLogo />
            <div className="ml-16 flex items-center gap-6">
              {footerLinks.map((item) => (
                <Link
                  key={item.id}
                  href={"/"}
                  className="leading-[100%]  transition-colors duration-300 hover:text-accent "
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-6">
              <div className="flex gap-6 items-center">
                <Link
                  href="tel:+7 993 338 08 88"
                  className="flex items-center gap-2  leading-none transition-all duration-300 hover:text-accent"
                >
                  <Mail size={20} />
                  <span className="">hello@kometa.team</span>
                </Link>

                <Link
                  href="tel:+7 993 338 08 88"
                  className="flex items-center gap-2  leading-none transition-all duration-300 hover:text-accent"
                >
                  <PhoneCall size={20} />
                  <span>+7 993 338 08 88</span>
                </Link>
              </div>

              <Socials />
            </div>
          </div>
          {/* Top End */}

          <div className="w-full h-[1px] bg-[#4B4B4B] my-6"></div>
          <div className="flex items-end">
            <p className="w-1/2 text-[24px] leading-[150%]">
              Какой-то текст об открытости и готовности решать любые задачи в
              любое время. Кайф движ париж. Мы всегда связи, а вы не на очке,
              что что-то не пойдет по плану.
            </p>
            <button className="flex leading-none bg-accent text-white w-1/4 text-center rounded-[4px] justify-center py-4 ml-auto">
              Обсудить проект
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#4B4B4B] my-6"></div>

          <div className="grid grid-cols-4 gap-x-4 gap-y-10">
            {footerLinksServices.map((item) => (
              <div key={item.id}>
                <h3 className="text-[20px] leading-[150%] font-semibold mb-4">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="leading-[100%] transition-colors duration-300 hover:text-accent"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-[#4B4B4B] my-6"></div>

          <div className="grid grid-cols-2 gap-5 text-gray-text text-[14px] leading-[130%]">
            <p className="grow">
              Мы используем cookies для сбора обезличенных персональных данных.
              Они помогают настраивать рекламу и анализировать трафик. Оставаясь
              на сайте, вы соглашаетесь на сбор таких данных.
            </p>

            <p className="grow">
              Интернет-сайт носит информационный характер и ни при каких
              условиях не является публичной офертой, которая определяется
              положениями статьи 437 Гражданского кодекса РФ.
            </p>
          </div>
        </div>
      </footer>
      {/* asdasd */}
      <div className="bg-[#171717] text-[14px] text-white leading-[100%] py-3">
        <div className="container">
          <div className="flex gap-6">
            <Link href={"/policy"}>Политика конфиденциальности</Link>
            <p className="ml-auto">ООО “Комета” 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};
