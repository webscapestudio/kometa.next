import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    link: "https://www.behance.net/",
    title: "wa",
    icon: "/images/wa.svg",
  },
  {
    id: 2,
    link: "https://www.behance.net/",
    title: "Behance",
    icon: "/images/tg.svg",
  },
  {
    id: 3,
    link: "https://www.behance.net/",
    title: "Behance",
    icon: "/images/be.svg",
  },
  {
    id: 4,
    link: "https://www.behance.net/",
    title: "Behance",
    icon: "/images/dp.svg",
  },
];

interface Props {
  className?: string;
}

export const Socials: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "flex gap-2 max-[769px]:gap-1")}>
      {data.map((item) => (
        <Link
          href={item.link}
          className="relative block w-12 h-12 max-[1441px]:w-10 max-[1441px]:h-10 max-[768px]:w-8 max-[768px]:h-8"
          target="_blank"
          key={item.id}
        >
          <Image className="" src={item.icon} fill alt={item.title} />
        </Link>
      ))}
    </div>
  );
};
