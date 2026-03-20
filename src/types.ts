export interface Project {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  education: {
    school: string;
    degree: string;
    period: string;
    cgpa: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  profileImage: string;
}
