import { Socials } from "@/components/ui";
import {
  Blog,
  FeaturesMarquee,
  Projects,
  Services,
  ServicesTabs,
  Showreel,
} from "@/components/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description: "Главная страница сайта",
};

export default function Home() {
  return (
    <>
      <section className="mt-20 max-[1441px]:mt-[64px] max-[1201px]:mt-[40px] max-[769px]:mt-8 max-[640px]:mt-6">
        <div className="container">
          <div className="flex items-end max-[1025px]:flex-col max-[1025px]:items-start max-[1025px]:gap-2">
            <h1 className="text-[90px] uppercase leading-none font-bold max-[1441px]:text-[64px] max-[1201px]:text-[48px] max-[640px]:text-[32px] max-[376px]:text-[28px]">
              создаем <br /> и продвигаем
              <span className="text-accent"> сайты</span>
            </h1>
            <Socials className="ml-auto mb-2 max-[1025px]:mb-0" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <hr className="my-10 text-gray-light mx-4 max-[1441px]:my-8 max-[1201px]:mx-2 max-[1025px]:my-5 max-[640px]:my-4" />
        </div>
      </section>

      <Showreel className="mt-0" />
      <ServicesTabs className="max-[768px]:hidden mt-[120px]" />
      <FeaturesMarquee />
      <Projects />
      <Services />
      <Blog />
      <section className="mt-[120px]"></section>
    </>
  );
}
