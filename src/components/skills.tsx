import React from "react";
import { Button } from "./ui/button";

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

const Skills = () => {
  return (
    <div>
      <h1 className="text-xl font-bold decoration-gray-500">Skills</h1>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Button
            className="bg-white text-black dark:bg-black dark:text-white"
            key={skill}
          >
            {skill}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
