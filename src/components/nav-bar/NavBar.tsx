import { useLocation, useNavigate } from "react-router";
import File from "../file/File";
import { data } from "./data";
import { useEffect, useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCoPresent } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [toolWidth, setToolWidth] = useState(320);
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/projects":
        setSelected("projects");
        break;
      case "/about":
        setSelected("about");
        break;
      case "/contact":
        setSelected("contact");
        break;
      case "/undefined":
        setSelected("none");
        break;
    }
  }, [location.pathname]);

  const handleSelect = (icon: string) => {
    setSelected(icon);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = toolWidth;

    const onMouseMove = (event: MouseEvent) => {
      const newWidth = startWidth + (event.clientX - startX);
      setToolWidth(Math.min(500, Math.max(150, newWidth)));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleClick = (icon: string) => {
    navigate(`/${icon !== "home" ? icon : ""}`);
    handleSelect(icon);
  };
  return (
    <div className="sm:h-full flex border-r border-r-[rgba(255,255,255,0.1)]">
      <div className="sm:w-[52px] w-full h-full  flex sm:flex-col flex-row  items-center overflow-hidden border-r border-r-[rgba(255,255,255,0.1)]">
        <div
          onClick={() => {
            handleClick("home");
          }}
          className={`relative flex justify-center hover:cursor-pointer w-full opacity-70 hover:opacity-100 ${
            selected === "home" ? "opacity-100" : ""
          }`}
        >
          <div className="p-2 ml-[2px]">
            <IoHomeOutline size={28} />
          </div>
          {selected === "home" && (
            <div className="absolute top-0 left-0 sm:w-[2px] w-full sm:h-full h-[2px] bg-blue-500"></div>
          )}
        </div>
        <div
          onClick={() => handleClick("projects")}
          className={`relative flex justify-center hover:cursor-pointer w-full opacity-70 hover:opacity-100 ${
            selected === "projects" ? "opacity-100" : ""
          }`}
        >
          <div className="p-2 ml-[2px]">
            <GoProjectRoadmap size={28} />
          </div>
          {selected === "projects" && (
            <div className="absolute top-0 left-0 sm:w-[2px] w-full sm:h-full h-[2px] bg-blue-500"></div>
          )}
        </div>
        <div
          onClick={() => handleClick("about")}
          className={`relative flex justify-center hover:cursor-pointer w-full opacity-70 hover:opacity-100 ${
            selected === "about" ? "opacity-100" : ""
          }`}
        >
          <div className="p-2 ml-[2px]">
            <MdOutlineCoPresent size={26} />
          </div>
          {selected === "about" && (
            <div className="absolute top-0 left-0 sm:w-[2px] w-full sm:h-full h-[2px] bg-blue-500"></div>
          )}
        </div>
        <div
          onClick={() => handleClick("contact")}
          className={`relative flex justify-center hover:cursor-pointer w-full opacity-70 hover:opacity-100 ${
            selected === "contact" ? "opacity-100" : ""
          }`}
        >
          <div className="p-2 ml-[2px]">
            <IoIosContact size={28} />
          </div>
          {selected === "contact" && (
            <div className="absolute top-0 left-0 sm:w-[2px] w-full sm:h-full h-[2px] bg-blue-500"></div>
          )}
        </div>
      </div>
      <div
        className=" flex-row h-full p-2 sm:flex hidden"
        style={{ width: `${toolWidth}px` }}
      >
        <div className="flex-grow overflow-auto">
          <div className="font-bold mb-2 uppercase text-sm">Explorer</div>
          <File title={data.title} content={data.content} type={data.type} />
        </div>
      </div>
      <div
        className="w-[2px] cursor-col-resize sm:block hidden"
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
}
