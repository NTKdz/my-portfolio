export default function About() {
  return (
    <div className="flex mt-1 ml-1">
      <div className="flex flex-col items-end w-10 mr-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className=" h-6 opacity-70">
            {index + 1}
          </div>
        ))}
      </div>
      <div>
        <div>
          <div className="text-base font-bold text-blue-500">Objective</div>
          <div>
            Seeking an internship opportunity as a Web Developer to leverage my
            coding skills, creativity, and passion for technology in
            contributing to innovative web development projects. Eager to gain
            hands-on experience, collaborate with experienced professionals, and
            further develop my expertise in front-end and back-end development.
          </div>
        </div>
        <div className="mt-6">
          <div className="text-base font-bold text-blue-500">Education</div>
          <div>
            VNU University of Engineering and Technology (VNU-UET) / 2021 - Now
            <div>Computer science GPA: 3.15</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-base font-bold text-blue-500">Skills</div>
          <div className="flex gap-4">
            <div>
              <div className="font-bold mx-auto">Front-end</div>
              <div>Html, Css, JavaScript</div>
              <div>ReactTS, NextTS, TailwindCSS</div>
              <div>TypeScript, TailwindCSS</div>
            </div>
            <div>
              <div className="font-bold mx-auto">Back-end</div>
              <div>NodeJS, ExpressJS, MongoDB</div>
              <div>Java, Spring Boot</div>
              <div>PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
