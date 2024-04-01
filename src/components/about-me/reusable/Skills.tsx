import React from "react";

export default function Skills({
  skills,
}: {
  skills: { category: string; skills: string[] }[];
}) {
  return (
    <div>
      {skills.map((category, index) => (
        <div key={index} className="flex">
          <h2 className="basis-1/5">{category.category}:</h2>
          <p className="flex basis-4/5 text-ellipsis overflow-hidden ">
            {category.skills.map((category) => category).join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
