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


export const ProjectsData = [
  {
    title: "Patrimônio-DPDF Website",
    description: "Web tool for asset control and organization, utilizing QR Code and NFC scanning technology.",
    image: "../../projetos/Image_patri.svg",
    techs: [
      { id: 1, image: "icones/SQLServer_Logo.svg" },
      { id: 2, image: "icones/Next_Logo.svg" },
      { id: 3, image: "icones/Tailwind_Logo.svg" },
      { id: 4, image: "icones/Docker_Logo.svg" },
      { id: 5, image: "icones/React_Logo.svg" },
    ]
  },
  {
    title: "Eclipse",
    description: "Data collection and management platform designed to streamline and optimize internal processes within the Public Defender’s Office of the Federal District (DPDF).",
    image: "../../projetos/Eclipse.svg",
    techs: [
      { id: 1, image: "icones/Mongo_Logo.svg" },
      { id: 2, image: "icones/Next_Logo.svg" },
      { id: 3, image: "icones/Tailwind_Logo.svg" },
      { id: 4, image: "icones/Docker_Logo.svg" },
      { id: 5, image: "icones/React_Logo.svg" },
    ]
  },
  {
    title: "In Construction",
    description: "",
    image: "../../projetos/Desktop.svg",
    techs: [
      { id: 1, image: "icones/" },
      { id: 2, image: "icones/" },
      { id: 3, image: "icones/" },
      { id: 4, image: "icones/" },
      { id: 5, image: "icones/" },
    ]
    // techs: [
    //   { id: 1, image: "icones/Postgres_Logo.svg" },
    //   { id: 2, image: "icones/Next_Logo.svg" },
    //   { id: 3, image: "icones/Tailwind_Logo.svg" },
    //   { id: 4, image: "icones/Docker_Logo.svg" },
    //   { id: 5, image: "icones/React_Logo.svg" },
    // ]
  },
  {
    title: "Final Project Title",
    description: "A brief description of the final project.",
    image: "",
    techs: [
      { id: 1, image: "react.png" },
      { id: 2, image: "typescript.png" },
      { id: 3, image: "javascript.png" },
      { id: 4, image: "tailwindcss.png" },
      { id: 5, image: "nextjs.png" },
    ]
  },
  {
    title: "Final Project Title",
    description: "A brief description of the final project.",
    image: "",
    techs: [
      { id: 1, image: "react.png" },
      { id: 2, image: "typescript.png" },
      { id: 3, image: "javascript.png" },
      { id: 4, image: "tailwindcss.png" },
      { id: 5, image: "nextjs.png" },
    ]
  },
  {
    title: "Final Project Title",
    description: "A brief description of the final project.",
    image: "",
    techs: [
      { id: 1, image: "react.png" },
      { id: 2, image: "typescript.png" },
      { id: 3, image: "javascript.png" },
      { id: 4, image: "tailwindcss.png" },
      { id: 5, image: "nextjs.png" },
    ]
  }
]


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