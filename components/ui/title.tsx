import React from "react";

interface Props {
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
