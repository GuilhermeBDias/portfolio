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
    title: "JavaScript",
  },
  {
    title: "TailwindCSS",
  },
  {
    title: "Next.js",
  },
];


export const ProjectsData = [
  {
    title: "Patrimônio-DPDF Website",
    description: "Web tool for asset control and organization, utilizing QR Code and NFC scanning technology.",
    image: "../../Image_patri.svg",
    techs: [
      { id: 1, image: "React_Logo.svg" },
      { id: 2, image: "Tailwind_Logo.svg" },
      { id: 3, image: "Type_Logo.svg" },
      { id: 4, image: "Next_Logo.svg" },
      { id: 5, image: "Motion_Logo.svg" },
    ]
  },
  {
    title: "Another Project Title",
    description: "A brief description of another project.",
    image: "",
    techs: [
      { id: 1, image: "React_Logo.svg" },
      { id: 2, image: "Postgres_Logo.svg" },
      { id: 3, image: "Type_Logo.svg" },
      { id: 4, image: "Next_Logo.svg" },
      { id: 5, image: "Motion_Logo.svg" },
    ]
  },
  {
    title: "Yet Another Project Title",
    description: "A brief description of yet another project.",
    iamge: "",
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
  { title: "Full-Stack developer trainee", description: "Assisted in the development of web applications using React, Node.js, and SQLServer.", image: "../../Logo_Main_01.svg" },
  { title: "IT Support Intern", description: "Provided technical support and troubleshooting for hardware and software issues.", image: "../../Logo_Main_02.svg" },
  { title: "Freelance Developer", description: "Developed and maintained websites for small businesses using HTML, CSS, and JavaScript.", image: "../../Logo_Ex_03.svg" },
  { title: "Freelance Web Developer", description: "Developed and maintained websites for small businesses using HTML, CSS, and JavaScript.", image: "../../Logo_Ex_04.svg" },
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