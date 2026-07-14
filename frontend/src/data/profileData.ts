export interface Project {
  title: string;
  description: string;
  technologies: string;
}

export interface TechnicalExperience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  summary: string;
  skills: SkillCategory[];
  experiences: TechnicalExperience[];
  projects: Project[];
  education: EducationEntry[];
  achievements: {
    programming: string[];
    mentorship: string[];
  };
  openSource: string[];
}

export const profileData: ProfileData = {
  name: "Akshit Garg",
  title: "Computer Science Undergraduate",
  tagline: "Computer Science undergraduate specializing in building scalable backend systems, real-time data pipelines, and research-oriented AI applications. Bridging the gap between traditional MERN stack development and modern Agentic/Generative AI.",
  about: "I am Akshit Garg, a Computer Science undergraduate student at The LNM Institute of Information Technology (LNMIIT), Jaipur, specializing in building scalable backend systems, real-time data pipelines, and research-oriented AI applications. I bridge the gap between traditional MERN stack development and modern Agentic/Generative AI, demonstrating a hybrid skill set that includes backend engineering (Node.js, Redis, BullMQ), model fine-tuning (LoRA, QLoRA), and competitive programming. I am particularly focused on system design, implementing asynchronous architectures using message queues, and high-performance caching layers.",
  summary: "Akshit Garg is an aspiring software engineer and AI practitioner. His journey reflects a combination of academic rigor, hands-on project development, and proactive research. He has worked extensively with backend technologies such as Node.js, Express.js, and Redis to build scalable APIs. His experience with MongoDB and relational databases enables him to design efficient data schemas. In the AI domain, he is actively involved in research on fine-tuning Small Language Models (SLMs) and building end-to-end AI applications using LLMs like Gemini and Mistral.",
  skills: [
    { name: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C++"] },
    { name: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
    { name: "Backend & Databases", skills: ["Node.js", "Express.js", "FastAPI", "Redis", "BullMQ", "MongoDB", "PostgreSQL"] },
    { name: "AI/ML & Tools", skills: ["HuggingFace", "PyTorch", "LoRA", "QLoRA", "Git", "Docker", "Puppeteer"] }
  ],
  experiences: [
    {
      title: "Research - Fine-Tuning Small Language Models (SLMs)",
      organization: "LNMIIT, Jaipur",
      duration: "Jan 2025 - May 2025 (4th Sem)",
      description: "Research focused on optimizing SLMs (Phi-4, Qwen3, Mistral-7B) for domain-specific tasks. Performed fine-tuning using LoRA/QLoRA on custom reasoning datasets. Conducted comparative analysis between fine-tuned SLMs and large foundational models."
    },
    {
      title: "Open Source Contributor",
      organization: "GSSoC'25 & Hacktoberfest'25",
      duration: "2025",
      description: "Selected Contributor at GSSoC'25, collaborating on bug fixes and feature enhancements. Additionally recognized as a Hacktoberfest'25 Super-Contributor for delivering impactful pull requests."
    }
  ],
  projects: [
    {
      title: "StockPulse AI (Real-time Financial Dashboard)",
      description: "A real-time financial tracking dashboard visualizing live stock price movements and market news. Used Redis Pub/Sub to broadcast real-time stock price updates to the frontend via WebSockets. Implemented BullMQ queues to handle resource-heavy AI sentiment analysis in the background. Utilized Redis HSET for fast price storage and caching to prevent external API rate-limit bottlenecks. Integrated Google Gemini AI to analyze news headlines and generate sentiment scores.",
      technologies: "MERN Stack, Redis (Pub/Sub & Caching), BullMQ, Google Gemini API"
    },
    {
      title: "InterviewAI (AI Resume Analyzer)",
      description: "An AI-powered platform that parses resumes and generates personalized interview reports. Leveraged Google Gemini API to analyze skill gaps and provide ATS-optimized resume feedback. Built a secure dashboard to track past interview analytics and report history. Implemented secure file processing with Multer and Puppeteer for parsing complex resume structures.",
      technologies: "MERN Stack, Gemini API, PDF-Parse, Puppeteer"
    },
    {
      title: "Project Management Portal",
      description: "A task management platform with role-based access control. Managed user state and tasks using MongoDB/Mongoose. Implemented JWT-based authentication and protected API routes.",
      technologies: "React.js, Node.js, Express.js, MongoDB"
    },
    {
      title: "Airbnb Backend Clone",
      description: "A backend system replicating Airbnb listing and booking functionality. Integrated MapTiler for geolocation and Cloudinary for image storage. Optimized database schemas for high-read operations.",
      technologies: "Node.js, Express.js, MongoDB, Render"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "The LNM Institute of Information Technology (LNMIIT), Jaipur",
      duration: "2023 - 2027",
      description: "CGPA: 7.98. Active in research and development of scalable backend systems and machine learning pipelines. Serving as Teaching Assistant, mentoring 80+ students in DSA, DBMS, DAA, and Computer Networks."
    },
    {
      degree: "High School (CBSE)",
      institution: "Ganga International School",
      duration: "2019 - 2023",
      description: "Class 10: 95.8%, Class 12: 89.6%"
    }
  ],
  achievements: {
    programming: [
      "LeetCode Knight Rank (1000+ problems solved)",
      "Codeforces Pupil Rank (300+ problems solved)",
      "GeeksforGeeks (300+ problems solved)"
    ],
    mentorship: [
      "Teaching Assistant: Mentored 80+ students in DSA, DBMS, DAA, and Computer Networks"
    ]
  },
  openSource: [
    "GSSoC'25 Contributor (Selected Contributor; collaborated on bug fixes & features)",
    "Hacktoberfest'25 Super-Contributor (Awarded for impactful PR contributions)"
  ]
};
