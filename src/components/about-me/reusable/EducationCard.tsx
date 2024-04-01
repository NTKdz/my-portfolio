import React from "react";

export default function EducationCard({
  name,
  duration,
  major,
  gpa,
}: {
  name: string;
  duration: string;
  major: string;
  gpa?: string;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{duration}</p>
      </div>
      <p>{major}</p>
      {gpa && <p>Gpa: {gpa}</p>}
    </div>
  );
}
