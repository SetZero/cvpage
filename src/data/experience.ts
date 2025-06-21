import { getYearsSince } from "../helper/Time";
import type { ContactLink, ExperienceItem, Project, SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", years: 5, knowledge: "advanced" },
      { name: "TypeScript", years: 5, knowledge: "advanced" },
      { name: "JavaScript", years: 5, knowledge: "advanced" },
      { name: "Rust", years: 2, knowledge: "intermediate" },
      { name: "Java", years: 3, knowledge: "intermediate" },
      { name: "PHP", years: 2, knowledge: "intermediate" },
      { name: "Python", years: 3, knowledge: "intermediate" },
      { name: "Go", years: 1, knowledge: "basic" },
      { name: "R", years: 1, knowledge: "basic" },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Git", years: 6, knowledge: "advanced" },
      { name: "Docker", years: 5, knowledge: "advanced" },
      { name: "Kubernetes", years: 3, knowledge: "intermediate" },
      { name: "Robot Framework", years: 2, knowledge: "intermediate" },
      { name: "Jira", years: 3, knowledge: "intermediate" },
      { name: "Codebeamer", years: 2, knowledge: "intermediate" },
      { name: "Google Test (GTest)", years: 3, knowledge: "intermediate" },
      { name: "GRPC/Protobuf", years: 4, knowledge: "intermediate" },
      { name: "CMake", years: 5, knowledge: "advanced" },
      { name: "Adaptive AUTOSAR", years: 2, knowledge: "intermediate" },
      { name: "KiCad", years: 2, knowledge: "intermediate" },
      { name: "PostgreSQL", years: 2, knowledge: "intermediate" },
      { name: "PyTorch / Torch", years: 1, knowledge: "basic" },
      { name: "Tensorflow", years: 1, knowledge: "basic" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "German", knowledge: "native" },
      { name: "English", knowledge: "fluent" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "12.2021 - Present",
    title: "Real Time Architecture Engineer",
    company: "ITK Engineering GmbH, Rülzheim",
    description: "Developing real-time systems and architecture solutions for embedded applications. Focus on performance optimization, system design, and implementing robust software architectures for mission-critical applications."
  },
  {
    period: "04.2020-12.2021",
    title: "Assistant, Databases, Deep Learning - Software Development",
    company: "Hochschule Kaiserslautern, Zweibrücken",
    description: "Research and development in databases and deep learning technologies. Contributed to academic projects while supporting students in software development and database management concepts."
  }
];

const programmingLanguagesCount = skillCategories.find(
  (cat) => cat.title === "Programming Languages"
)?.skills.length ?? 0;
const roundedProgrammingLanguages = Math.floor(programmingLanguagesCount / 5) * 5;

export const stats = [
  { number: `${getYearsSince("01.04.2020")}+`, label: "Years Experience" },
  { number: `${roundedProgrammingLanguages}+`, label: "Programming Languages" },
  { number: "10+", label: "Open Source Projects" }
];


export const contactLinks: ContactLink[] = [
  {
    href: "mailto:contact@dauenhauer.eu",
    icon: "📧",
    text: "contact@dauenhauer.eu",
  },
  {
    href: "https://www.linkedin.com/in/sebastian-dauenhauer-a326a4335/",
    icon: "💼",
    text: "LinkedIn Profile",
    external: true,
  },
  {
    href: "https://github.com/SetZero",
    icon: "🔗",
    text: "GitHub Profile",
    external: true,
  },
  {
    href: "https://privacy.magical.rocks/",
    icon: "🛡️",
    text: "Impressum",
    external: true,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export const projects: Project[] = [
  {
    title: "Fancy Mumble",
    tech: ["TypeScript", "Rust", "Tauri", "React", "Protobuf", "Android","Windows", "Linux"],
    description:
      "Modern VoIP desktop client for Mumble with enhanced UI/UX and real-time voice features",
    github: "https://github.com/Fancy-Mumble/FancyMumble",
    images: ["/refimages/projects/fancy/fancy_start.png", "/refimages/projects/fancy/fancy_chat.png", "/refimages/projects/fancy/fancy_chat_desktop.png"],
  },
  {
    title: "A4963",
    tech: ["C++"],
    description:
      "Driver software for the Allegro MicroSystems A4963 motor-driver chip using MCP2210 USB-SPI and ATmega32u4",
    github: "https://github.com/SetZero/A4963",
  },
  {
    title: "Distant Supervision",
    tech: ["Go", "TypeScript", "JavaScript"],
    description:
      "WebRTC-based remote collaboration tool for real-time video/audio collaboration via peer-to-peer connections",
    github: "https://github.com/SetZero/distant-supervision",
  },
  {
    title: "LogisticsBPMN",
    tech: ["Java", "JavaScript", "Python"],
    description:
      "Example BPMN workflow for a logistics company, built with Camunda, including backend REST APIs and frontend interface",
    github: "https://github.com/SetZero/LogisticsBPMN",
  },
  {
    title: "G474RE-CORDIC",
    tech: ["C++", "ARM Assembly"],
    description:
      "C++ implementation using CORDIC co-processor on STM32-G474RE to compute trigonometric and hyperbolic functions",
    github: "https://github.com/SetZero/G474RE-CORDIC",
  },
  {
    title: "C++ Generic Firmware Loader",
    tech: ["C++", "ARM Assembly"],
    description:
      "Library to load firmware to any device supported by the C++ Generic Bootloader via serial.",
    github: "https://github.com/firmware-loader/cpp-firmware-loader"
  }
];