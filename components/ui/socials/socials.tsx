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
    <div className={cn(className, "flex gap-2")}>
      {data.map((item) => (
        <Link
          href={item.link}
          className="relative block w-12 h-12"
          target="_blank"
          key={item.id}
        >
          <Image className="" src={item.icon} fill alt={item.title} />
        </Link>
      ))}
    </div>
  );
};
