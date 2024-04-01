import React from "react";

const myProject = [{ title: "d", description: "d", url: "", img: "" }];
export default function MyProject() {
  return (
    <div>
      {myProject.map((project) => (
        <div className="w-full flex">
          <div className="w-1/3">
            <p>{project.title}</p>
            <p>{project.description}</p>
            <button onClick={() => {}}>see demo</button>
          </div>
          <div className="w-2/3">
            <img src={project.img ? project.img : "public/vite.svg"} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
