
export interface NewsItem {
  date: string;
  content: string;
  link?: string;
  linkText?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  thumbnail: string;
  pdfUrl?: string;
  codeUrl?: string;
  websiteUrl?: string;
  doi?: string;
  type: 'Paper' | 'Poster';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageText: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CoffeeLog {
  id: string;
  title: string;
  date: string;
  tldr: string;
  content: string[];
}

export type PageId = 'about' | 'publications' | 'projects' | 'ohho';
