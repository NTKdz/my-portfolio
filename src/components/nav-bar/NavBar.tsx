import { useNavigate } from "react-router";
import File from "../file/File";
import { data } from "./data";
import { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";

export default function NavBar() {
  const navigate = useNavigate();
  const [toolWidth, setToolWidth] = useState(240);
  const [selected, setSelected] = useState(null);

  const handleSelect = (icon) => {
    setSelected(icon);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = toolWidth;

    const onMouseMove = (event: MouseEvent) => {
      const newWidth = startWidth + (event.clientX - startX);
      setToolWidth(Math.max(150, newWidth));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="h-full flex border-r border-r-[rgba(255,255,255,0.1)]">
      <div className="w-[52px] h-full flex flex-col  items-center overflow-hidden border-r border-r-[rgba(255,255,255,0.1)]">
        <div
          onClick={() => handleSelect("home")}
          className={`hover:cursor-pointer p-2 opacity-70 hover:opacity-100 ${
            selected === "home" ? "text-blue-500" : ""
          }`}
        >
          <IoHomeOutline size={28} />
        </div>
        <div
          onClick={() => handleSelect("roadmap")}
          className={`hover:cursor-pointer p-2 opacity-70 hover:opacity-100 ${
            selected === "roadmap" ? "text-blue-500" : ""
          }`}
        >
          <GoProjectRoadmap size={28} />
        </div>
        <div
          onClick={() => handleSelect("about")}
          className={`hover:cursor-pointer p-2 opacity-70 hover:opacity-100 ${
            selected === "about" ? "text-blue-500" : ""
          }`}
        >
          <SiAboutdotme size={28} />
        </div>
        <div
          onClick={() => handleSelect("contact")}
          className={`hover:cursor-pointer p-2 opacity-70 hover:opacity-100 ${
            selected === "contact" ? "text-blue-500" : ""
          }`}
        >
          <IoIosContact size={28} />
        </div>
      </div>
      <div
        className="flex flex-row h-full p-2"
        style={{ width: `${toolWidth}px` }}
      >
        <div className="flex-grow overflow-auto">
          <div className="font-bold mb-2 uppercase text-sm">Explorer</div>
          <File title={data.title} content={data.content} type={data.type} />
        </div>
      </div>
      <div
        className="w-[2px] cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
}
