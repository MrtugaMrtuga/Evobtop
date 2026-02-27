
export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  details: string[];
}
