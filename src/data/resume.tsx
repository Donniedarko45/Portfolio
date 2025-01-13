import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { describe } from "node:test";
import { type } from "os";

export const DATA = {
  name: "Kartikey Pandey",
  initials: "KP",
  url: "https://github.com/Donniedarko45",
  location: "Dehradun, India",
  locationLink: "https://www.google.com/maps/place/dehradun",
  description:
    "Loves Software Engineer. I love building things and tweaking things.",
  summary:
    "I am a software engineer who loves building things and helping people. I have experience in building Full stack websites and intrest in Devops and GenAI. I am passionate about open source and building developer tools. I am currently working on building a new startup.",
  avatarUrl: "/me.png",
  skills: [
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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kartikey224252@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Donniedarko45",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kartikeypandey45/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hellomewhat",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Uniisphere",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/unii.png",
      start: "Aug 2024",
      end: "Present",
      description:
        " Builded a whole Backend for the company developed a lot of features for the company like event management, Feed suggestions,Auth implementation, Feed and profile Suggestions,and chat features Used Load balancer for traffic handling.",
    },
    {
      company: "Pehchaan The Street School",
      badges: [],
      href: "https://pehchaanstreetschool.org/",
      location: "Remote",
      title: "Content Writing",
      logoUrl: "/OIP.jpeg",
      start: "May 2024",
      end: "July 2024",
      description:
        "Worked as a content writer for the company and wrote a lot of articles for the company and also worked on the company's website.",
    },
  ],
  education: [
    {
      school: "University of Petroleum and Energy Studies",
      href: "https://www.upes.ac.in/",
      degree: "B.TECH in Computer Science",
      logoUrl: "/ib.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Portfolio",
      href: "",
      dates: "December 2024",
      active: true,
      description:
        "Designed and developed my personal portfolio website to showcase my work and projects.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Donniedarko45/Portfolio",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "donniedarko.tech",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/port.png",
    },
    {
      title: "Agro AI",
      href: "https://github.com/Donniedarko45/weather-app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "Sqlite",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Donniedarko45/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agro.png",
    },
    {
      title: "Food Villa",
      href: "https://github.com/Donniedarko45/React",
      dates: "May 2024 - September 2024",
      active: true,
      description:
        "Developed a platform for restaurants to accept online orders and manage their menu.",
      technologies: ["React.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/food.png",
    },
    {
      title: "Youtube-Backend",
      href: "",
      dates: "April 2024 - July 2024",
      active: true,
      description:
        "Developed a backend for a youtube clone using Express.js,Mongo and Jwt token.",
      technologies: ["Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yt.png",
    },
    {
      title: "Shayari Generator",
      dates: "December 2024",
      active: true,
      description:
        "developed a shayri generator app using Next js and and Mistral model for generating shayri as per users input. works well on completing the unfinished shayri.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Mistral API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Donniedarko45/ShayariGenerator",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://shayari-generator-eosin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Shayari.png",
    },
  ],
  hackathons: [
    {
      title: "Agro AI",
      dates: "September 23rd - 28th, 2024",
      location: "Dehradun, Uttrakhand",
      description:
        "Developed an AI model which predicts the crop yield of a farm using satellite imagery and weather data.",
      image: "/agro.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/Donniedarko45/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
