import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { RiCloseFill } from "react-icons/ri";

const fileMap: Record<string, string> = {
  "/": "Home.tsx",
  "/projects": "Projects.ts",
  "/about": "About.html",
  "/contact": "Contact.css",
};

export default function FileSelector() {
  const location = useLocation();
  const navigate = useNavigate();
  const [files, setFiles] = React.useState<string[]>([
    "Home.tsx",
    "Projects.ts",
    "About.html",
    "Contact.css",
  ]);
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  useEffect(() => {
    location.pathname === "/undefined" && navigate("/");
  }, []);

  useEffect(() => {
    const fileName = fileMap[location.pathname];
    if (fileName === undefined) {
      return;
    }

    setFiles((prevFiles) => {
      if (!prevFiles.includes(fileName)) {
        const updatedFiles = [...prevFiles, fileName];
        setCurrentTab(updatedFiles.indexOf(fileName));
        return updatedFiles;
      }
      setCurrentTab(prevFiles.indexOf(fileName));
      return prevFiles;
    });
  }, [location.pathname]);

  function getIcon(file: string) {
    const fileName = file.toLocaleLowerCase().split(".")[0];
    if (fileName.includes("home"))
      return <img src="src\assets\react_icon.svg" alt="" className="w-4 h-4" />;
    if (fileName.includes("projects"))
      return <img src="src\assets\ts-icon.svg" alt="" className="w-5 h-5" />;
    if (fileName.includes("about"))
      return <img src="src\assets\html_icon.svg" alt="" className="w-5 h-5" />;
    if (fileName.includes("contact"))
      return <img src="src\assets\css_icon.svg" alt="" className="w-4 h-4" />;
  }
  return (
    <div className="w-full h-[36px]  text-center sm:flex hidden min-w-0">
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
          <div className="text-center flex items-center justify-center gap-1">
            {getIcon(file)}
            {file}
          </div>
          <div
            className="text-blue-500 opacity-0 group-hover:opacity-50 hover:bg-zinc-100 rounded transition-all"
            onClick={(e) => {
              e.stopPropagation();
              const updatedFiles = [...files];
              updatedFiles.splice(index, 1);
              setFiles(updatedFiles);

              const newIndex =
                currentTab - 1 < 0
                  ? 0
                  : currentTab > index
                  ? currentTab - 1
                  : currentTab === index
                  ? currentTab - 1
                  : currentTab;
              setCurrentTab(newIndex);
              if (currentTab === index) {
                const newFileName = updatedFiles[newIndex]
                  ?.split(".")[0]
                  .toLowerCase();
                navigate(newFileName !== "home" ? `/${newFileName}` : "/");
              }
            }}
          >
            <RiCloseFill size={18} />
          </div>
        </div>
      ))}
    </div>
  );
}
