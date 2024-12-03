import { useEffect, useRef, useState } from "react";
import { Tag } from "../../components/tag/Tag";
import "./styles.css";

const projects = [
  {
    title: "ClearNews",
    description:
      "An accessible news platform designed for visually impaired users, featuring text-to-speech integration and customizable theme related settings.",
    image: "src/assets/clearnews.png",
    languages: ["React", "Redux", "Tailwind", "Material-ui", "Firebase"],
    source:
      "https://github.com/NTKdz/clone-web-project---uet-phat-trien-ung-dung-web",
    demo: "https://tuong-tac-nguoi-may.vercel.app",
  },
  {
    title: "Package Manager",
    description:
      "A user-friendly website to manage, track, and analyze package deliveries with detailed statistical insights. Built with React and Node.js.",
    image: "src/assets/package-manager.png",
    languages: [
      "React",
      "Typescript",
      "Redux",
      "Tailwind",
      "Shad-ui",
      "Java Spring boot",
      "Postgresql",
    ],
    source: "https://github.com/NTKdz/package-manager",
    demo: "https://example.com/",
  },

  {
    title: "SprintSync",
    description:
      "A productivity-focused mobile app for project and task management, offering real-time collaboration and progress tracking. Developed using Flutter.",
    image: "src/assets/sprintsync.png",
    languages: ["Kotlin", "Firebase", "Jetpack compose"],
    source: "https://github.com/NTKdz/clone-mobile-project---uet-mobdev20",
    demo: "https://example.com/",
  },
];

export default function Projects() {
  const [columns, setColumns] = useState("grid-cols-3");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      console.log(columns);
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        console.log(width);
        if (width < 600) {
          setColumns("grid-cols-1");
        } else if (width < 800) {
          setColumns("grid-cols-2");
        } else {
          setColumns("grid-cols-3");
          console.log("d");
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(containerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="">
      <div className={`grid ${columns} gap-8 px-8 pt-8 `}>
        {projects &&
          projects.map((item, index: number) => (
            <div key={index}>
              <div className="relative bg-[#27272a] rounded-lg shadow-md h-[400px] overflow-hidden group hover:cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full absolute top-0 left-0 object-cover z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="group absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-0 transition-opacity bg-opacity-80 z-1 flex justify-center">
                  <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                    {/* <div className="w-full h-1/3"></div> */}
                    <h2 className="text-xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.languages &&
                        item.languages.map((lang, index) => (
                          <Tag key={index} text={lang} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 p-2">
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="growing-underline relative text-lg text-white"
                >
                  Source
                </a>

                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="growing-underline relative text-lg"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
