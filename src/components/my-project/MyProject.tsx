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
            <img
              className="w-2/3 h-96 mx-auto object-cover"
              src={project.img ? project.img : "src/assets/test.jpg"}
              alt=""
              // style={{width: "100%", height: "100px", objectFit:"fill"}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
