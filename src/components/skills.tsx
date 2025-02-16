import React from "react";

const skills = [
  "Javascript",
  "Prisma",
  "React",
  "Next.js",
  "Typescript",
  "Express.js",
  "Node.js",
  "Python",
  "Sql",
  "Postgres",
  "Docker",
  "C++",
];

export const Skills = () => {
  return (
    <div>
      <div className="text-xl font-bold  text-gray-400">Skills</div>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="m-2 p-2 dark:bg-black bg-white rounded-lg font-mono"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
