import React from "react";
import { useLocation, useNavigate } from "react-router";
import { RiCloseFill } from "react-icons/ri";
export default function FileSelector() {
  const location = useLocation().pathname.split("/");
  const navigate = useNavigate();
  const [files, setFiles] = React.useState<string[]>([
    "Home.tsx",
    "Projects.ts",
    "About.html",
    "Contact.css",
  ]);
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <div className="w-full h-[36px] flex text-center">
      {files.map((file, index) => (
        <div
          key={index}
          className={`flex gap-2 items-center px-3 hover:cursor-pointer text-center group ${
            currentTab === index
              ? "bg-zinc-900 text-white border-b-[rgba(255,255,255,0)]"
              : "border-b-[rgba(255,255,255,0.1)]"
          }  border-r-[rgba(255,255,255,0.1)] border-b border-r`}
          onClick={() => {
            navigate(
              `/${
                file.toLocaleLowerCase().split(".")[0].includes("home")
                  ? ""
                  : file.toLocaleLowerCase().split(".")[0]
              }`
            );
            setCurrentTab(index);
          }}
        >
          <div className="text-center">{file}</div>
          <div
            className="text-[#00dbde] opacity-0 group-hover:opacity-50 hover:bg-zinc-100 rounded transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setFiles(files.filter((f) => f !== file));
            }}
          >
            <RiCloseFill size={18} />
          </div>
        </div>
      ))}
    </div>
  );
}
