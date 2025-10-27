import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const testimonials = [
  {
    title: "React",
  },
  {
    title: "TypeScript",
  },
  {
    title: "TailwindCSS",
  },
  {
    title: "Next.js",
  },
  {
    title: "Docker",
  },
];

export const experience = [
  { title: "Full-Stack developer trainee", description: "Assisted in the development of web applications using React, Node.js, Next.js, and SQLServer.", image: "../../Logo_Ex_01.svg" },
  { title: "Computer Science Student", description: "Gained solid foundations in programming, software development best practices, and version control (Git).", image: "../../Logo_Ex_02.svg" },
  { title: "Junior Web Developer", description: "Worked on small-scale projects while improving skills in React, TypeScript, and agile development practices.", image: "../../Logo_Ex_03.svg" },
  { title: "Freelance Web Developer", description: "Built responsive landing pages and optimized front-end performance for better user experience.", image: "../../Logo_Ex_04.svg" },
]


type SocialLink = {
  link: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { link: "https://www.linkedin.com/in/guilherme-barbosa-dias-8532b6302/", icon: FaLinkedin },
  { link: "https://github.com/GuilhermeBDias", icon: FaGithub },
  { link: "https://wa.me/5561996911079", icon: FaWhatsapp }
];