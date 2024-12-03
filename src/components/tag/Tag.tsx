import React from "react";

type TagProps = {
  text: string;
};

export const Tag: React.FC<TagProps> = ({ text }) => {
  const colorMap: { [key: string]: string } = {
    React: "#61dafb",
    Typescript: "#3178c6",
    Redux: "#764abc",
    Tailwind: "#38bdf8",
    "Shad-ui": "#a855f7",
    "Java Spring boot": "#6db33f",
    Postgresql: "#336791",
    "Material-ui": "#0081cb",
    Firebase: "#ffcb2b",
    Kotlin: "#a97bff",
    "Jetpack compose": "#1d9ceb",
  };

  const color = colorMap[text] || "#aaaaaa";

  return (
    <span
      className="px-3 py-1 rounded-full text-white font-mono text-sm"
      style={{ border: `2px solid ${color}` }}
    >
      {text}
    </span>
  );
};
