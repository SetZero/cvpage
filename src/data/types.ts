export interface ExperienceItem {
    period: string;
    title: string;
    company: string;
    description: string;
}
export interface ContactLink {
    href: string;
    icon: string;
    text: string;
    external?: boolean;
}

export interface Project {
    title: string;
    tech: string[];
    description: string;
    github: string;
    images?: string[];
}

export type KnowledgeLevel =
  | "basic"
  | "intermediate"
  | "advanced"
  | "native"
  | "fluent";

export interface SkillCategory {
    title: string;
    skills: {
        name: string;
        years?: number;
        knowledge?: KnowledgeLevel;
    }[];
}
