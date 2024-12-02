import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.css";
interface FileNode {
  type: "file";
  title: string;
  content: string;
}

export interface FolderNode {
  type: "folder";
  title: string;
  content: FileSystemNode[];
}

type FileSystemNode = FileNode | FolderNode;

const pathToTab: { [key: string]: string } = {
  "": "home",
  about: "about",
  projects: "projects",
  contact: "contact",
};
export default function File({
  type,
  title,
  content,
  path = "",
}: {
  type: "file" | "folder";
  title: string;
  content: FileSystemNode[];
  path?: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = `${path}/${title}`;
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState("");

  useEffect(() => {
    setSelectedTab(pathToTab[location.pathname.slice(1)] || "none");
  }, [location.pathname]);

  return (
    <div
      className={`${
        title === "my-portfolio" ? "" : "pl-2"
      } hover:cursor-pointer text-center text-sm relative`}
    >
      {title !== "my-portfolio" && (
        <div className="absolute h-full bg-[rgba(255,255,255,0.1)] w-[1px]"></div>
      )}
      <div
        className={`flex items-center ${
          title === "my-portfolio" ? "font-bold" : ""
        } gap-1 py-1 ${
          title.toLowerCase().includes(selectedTab)
            ? "text-[#00dbde] bg-zinc-900"
            : ""
        } hover:bg-[#00dbde] hover:text-zinc-900 transition-all`}
        onClick={() => {
          if (type === "folder") {
            console.log("click folder", title);
            setIsOpen((prev) => !prev);
          } else {
            if (title.toLowerCase().includes("home")) {
              navigate("/");
            } else navigate(title.toLowerCase().split(".")[0]);
          }
        }}
      >
        {type === "folder" ? (
          isOpen ? (
            <IoIosArrowDown size={16} className="transition-all" />
          ) : (
            <IoIosArrowDown
              size={16}
              style={{ transform: "rotate(-90deg)" }}
              className="transition-all"
            />
          )
        ) : (
          <div className="w-[20px]"></div>
        )}
        <div className="text-animation">{title}</div>
      </div>

      {isOpen && type === "folder" && (
        <div className="overflow-hidden">
          <div id="file-animation">
            {content?.map((item, index) => (
              <File
                key={index}
                type={item.type}
                title={item.title}
                content={item.content as FileSystemNode[]}
                path={currentPath}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
