import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  name: "Vedant Patole",
  title: "Electronics & Computer Science Engineer",
  location: "Mumbai, India",
  email: "9j40vedant@gmail.com",
  github: "https://github.com/VedantPatole",
  linkedin: "https://www.linkedin.com/in/vedant-patole-mumbai",
  education: {
    school: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech in Electronics and Computer Science",
    period: "2024 – 2028",
    cgpa: "8.5/10"
  },
  experience: [
    {
      company: "Deloitte (Forage)",
      role: "Technology Job Simulation",
      period: "July 2025",
      bullets: [
        "Completed hands-on coding and development tasks simulating enterprise-level technology consulting workflows.",
        "Analyzed business requirements and translated them into structured technical solutions.",
        "Applied problem-solving methodologies aligned with real-world software development practices."
      ]
    }
  ],
  projects: [
    {
      title: "Chikitsak AI",
      description: "AI-Powered Medical Symptom Analysis System",
      tech: ["Next.js", "FastAPI", "PyTorch", "PostgreSQL", "SQLAlchemy", "JWT"],
      bullets: [
        "Developed full-stack AI healthcare platform enabling real-time symptom-based disease prediction.",
        "Integrated deep learning model (PyTorch) with optimized REST API inference pipeline.",
        "Implemented JWT authentication, password hashing, and scalable backend architecture."
      ]
    },
    {
      title: "Hybrid RAG System",
      description: "Document Question-Answering System",
      tech: ["LangChain", "FAISS", "BM25", "Cross-Encoder", "Ollama (Mistral)"],
      bullets: [
        "Built hybrid Retrieval-Augmented Generation pipeline combining semantic and keyword search.",
        "Implemented cross-encoder re-ranking to improve contextual accuracy of responses.",
        "Optimized retrieval latency and evaluated system performance metrics."
      ]
    },
    {
      title: "JobFlow",
      description: "Full-Stack Job Portal",
      tech: ["Next.js", "Prisma ORM", "PostgreSQL", "JWT"],
      bullets: [
        "Developed scalable job portal with role-based dashboards for recruiters and candidates.",
        "Implemented automated job scraping pipeline with scheduled background processing.",
        "Built advanced filtering, pagination, and secure session-based authentication."
      ]
    },
    {
      title: "EduTech J-K",
      description: "Learning Management System",
      tech: ["Next.js", "Tailwind CSS", "API Routes"],
      bullets: [
        "Designed responsive full-stack education platform with dynamic routing.",
        "Implemented secure authentication and structured course management workflows.",
        "Optimized application performance using modular architecture and server-side rendering."
      ]
    }
  ],
  skills: [
    {
      category: "Programming",
      skills: ["Java", "Python", "C", "TypeScript"]
    },
    {
      category: "Frameworks",
      skills: ["React.js", "Next.js", "Express.js", "FastAPI", "Spring Boot", "Django"]
    },
    {
      category: "AI/ML",
      skills: ["Machine Learning", "NLP", "LLM Development", "Model Evaluation"]
    },
    {
      category: "Backend & DB",
      skills: ["REST APIs", "PostgreSQL", "MySQL", "Prisma ORM"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "MATLAB"]
    },
    {
      category: "Core CS",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"]
    },
    {
      category: "Electronics",
      skills: ["Digital Electronics", "Microprocessors", "Circuit Analysis"]
    }
  ],
  profileImage: "VEDANT.jpeg"
};
