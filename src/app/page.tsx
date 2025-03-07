"use client";

import { AnimatedBeamDemo } from "@/components/animated-beam";
import { ContactForm } from "../components/contact-us";
import { HackathonCard } from "@/components/hackathon-card";
import { IconCloudDemo } from "@/components/icon-cloud";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="font-mono text-base font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-slate-400">
              {" "}
              {`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            </div>
            <div className="max-w-[600px] font-mono py-8px text-sm md:text-base">
              {" "}
              {DATA.description}
            </div>
          </div>
          <Avatar className="size-28 border-4 ring-rose-600  shadow-lg rounded-full flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 animate-ripple rounded-full border-4 ring-rose-600"></div>

            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              className="w-full h-full object-cover z-10"
            />
            <AvatarFallback className="text-gray-700 text-base font-semibold bg-gray-200 flex items-center justify-center w-full h-full z-10">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>{" "}
        </div>
      </div>

      <h2 className="text-base font-mono  font-bold decoration-gray-500 [text-decoration-style:wavy]">
        About
      </h2>

      <Markdown className="prose max-w-full font-mono text-base text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
      <br />
      <div className="relative mb-4 text-base  h-full flex items-center">
        🌱 I'm currently learning about DevOps and GenAI.
        <br />
      </div>

      <div className="flex min-h-0 text-gray-500 flex-col gap-y-3">
        <h2 className="text-base font-bold  font-mono text-gray-500  mb-1  underline decoration-gray-500 [text-decoration-style:wavy]">
          Work Experience
        </h2>
        {DATA.work.map((work) => (
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        ))}
      </div>

      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-base font-bold underline mt-6 mb-2 text-gray-500  decoration-gray-500 [text-decoration-style:wavy]">
          Education
        </h2>
        {DATA.education.map((education) => (
          <ResumeCard
            key={education.school}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        ))}
      </div>
      <div className="mt-6 text-base  mb-2">
        <div className="text-base font-bold   underline mt-6 mb-2 text-gray-500  decoration-gray-500 [text-decoration-style:wavy]">
          Skills
        </div>
        <IconCloudDemo /> <AnimatedBeamDemo />
      </div>
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block font-mono rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <p className="text-muted-foreground font-mono  ">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 font-mono  gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              //video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
      {/*
      <div className="space-y-12 w-full py-6">
        <div className="flex flex-col items-center justify-center text-gray-300  space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block font-mono rounded-lg bg-foreground text-black  text-background px-3 py-1 text-sm">
              Hackathons
            </div>
          </div>
        </div>
        <ul className="mb-4 ml-4 font-mono divide-y divide-dashed text-gray-300 border-l">
          {DATA.hackathons.map((project) => (
            <HackathonCard
              title={project.title}
              description={project.description}
              location={project.location}
              dates={project.dates}
              image={project.image}
            // links={project.links}
            />
          ))}
        </ul>
      </div>
      */}
      <div className="container mx-auto py-10">
        <div className="space-y-3">
          <div className="inline-block font-mono rounded-lg  bg-foreground text-background px-3 py-1 text-sm text-center">
            Contact
          </div>
          <h2 className="text-2xl font-bold tracking-tighter font-mono sm:text-4xl">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
