import React from "react";
import EducationCard from "./reusable/EducationCard";
import Skills from "./reusable/Skills";

const educationData = [
  {
    name: "VNU University of Engineering and Technology – VNU-UET",
    duration: "2021 - Now",
    major: "Computer science",
    gpa: "3.06",
  },
];
const skills = [
  {
    category: "Front-end",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Axios",
      "MUI",
    ],
  },
  {
    category: "Back-end",
    skills: [
      "Node.js (Express.js) - basic knowledge routing",
      "Build REST API",
    ],
  },
  {
    category: "Language",
    skills: [
      "English - Capable of communication, comprehending documents, and meeting school requirements",
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="bg-neutral-900 px-10">
      <p className="text-4xl uppercase ">About me</p>
      <div className="flex flex-row justify-between">
        <div className="basis-1/2 pr-8">
          <p>education</p>
          {educationData.map((data) => {
            return (
              <EducationCard
                name={data.name}
                duration={data.duration}
                major={data.major}
                gpa={data.gpa}
              />
            );
          })}
        </div>
        <div className="basis-1/2">
          <p>skills</p>
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
}
