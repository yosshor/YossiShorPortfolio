export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}
