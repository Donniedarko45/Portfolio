"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { ContactForm } from "../components/contact-us";
import { IconCloud } from "@/components/magicui/interactiveCloud";
import { Cover } from "../components/ui/cover";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function useScrollAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return controls;
}

const BLUR_FADE_DELAY = 0.04;

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "neovim",
  "c",
  "c++",
  "python",
];

export default function Page() {
  const scrollControls = useScrollAnimation();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-[100dvh] space-y-10"
    >
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-mono text-xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] font-mono py-8px  text-normal  md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border-4 ring-rose-600  shadow-lg rounded-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 animate-ripple rounded-full border-4 ring-rose-600"></div>

                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="w-full h-full object-cover z-10"
                />
                <AvatarFallback className="text-gray-700 text-lg font-semibold bg-gray-200 flex items-center justify-center w-full h-full z-10">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>{" "}
            </BlurFade>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-mono  font-bold decoration-gray-500 [text-decoration-style:wavy]">
            About
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full font-mono text-normal text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
          <br />
          <div className="flex justify-center rounded-lg  items-center bg-gray-100 dark:bg-black p-4">
            <div className="relative w-full max-w-2xl h-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 border-4 border-transparent animate-border-flow rounded-lg"></div>
              <div className="relative h-full flex items-center p-6">
                <div className="prose dark:prose-invert font-mono text-sm sm:text-base leading-relaxed">
                  🌱 I'm currently learning about DevOps and GenAI.
                  <br />
                  🌐 Currently working on a project that writes blogs and
                  project docs generally helpful for students and will be able
                  to pass ZeroGPT and Turnitin.
                  <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes border-flow {
                0% {
                  background-image: linear-gradient(
                      90deg,
                      #031e4b 50%,
                      transparent 50%
                    ),
                    linear-gradient(90deg, transparent 50%, #02112b 50%),
                    linear-gradient(0deg, transparent 50%, #00040b 50%),
                    linear-gradient(0deg, #000a1c 50%, transparent 50%);
                  background-position:
                    0% 0%,
                    0% 100%,
                    0% 0%,
                    100% 0%;
                  background-size:
                    200% 4px,
                    200% 4px,
                    4px 200%,
                    4px 200%;
                }
                100% {
                  background-image:
                    linear-gradient(90deg, #00040b 50%, transparent 50%),
                    linear-gradient(90deg, transparent 50%, #010e23 50%),
                    linear-gradient(0deg, transparent 50%, #02112b 50%),
                    </div> linear-gradient(0deg, #000000 50%, transparent 50%);
                  background-position:
                    200% 0%,
                    -200% 100%,
                    0% 200%,
                    100% -200%;
                  background-size:
                    200% 4px,
                    200% 4px,
                    4px 200%,
                    4px 200%;
                }
              }

              .animate-border-flow {
                animation: border-flow 4s linear infinite;
              }
            `}</style>
          </div>{" "}
        </BlurFade>
      </motion.section>
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold  font-mono  underline decoration-gray-500 [text-decoration-style:wavy]">
              Work Experience
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
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
            </BlurFade>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold underline decoration-gray-500 [text-decoration-style:wavy]">
              Education
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="skill"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <h2 className="text-xl font-bold font-mono  underline decoration-gray-500 [text-decoration-style:wavy]">
          Skills
        </h2>
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </motion.section>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-mono rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold font-mono tracking-tighter sm:text-5xl">
                  <Cover> Check out my latest work </Cover>
                </h2>
                <p className="text-muted-foreground font-mono  ">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 font-mono  gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  //video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        id="hackathons"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-mono rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold  tracking-tighter sm:text-5xl">
                  <span>I like building things</span>
                </h2>
                <p className="text-muted-foreground font-mono">
                  I attended 3+ hackathons. People from around the country would
                  come together and build incredible things in 2-3 days. It was
                  eye-opening to see the endless possibilities brought to life
                  by a group of motivated and passionate individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 font-mono divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    // links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </motion.section>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={scrollControls}
      >
        <div className="container mx-auto py-10">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block font-mono rounded-lg bg-foreground text-background px-3 py-1 text-sm text-center">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </BlurFade>
        </div>
      </motion.section>
    </motion.main>
  );
}
