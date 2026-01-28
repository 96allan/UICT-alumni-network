// Fix: Import `ComponentType` from react to use it as a type.
import type { ComponentType } from 'react';

export interface Alumnus {
  id: number;
  name: string;
  photoUrl: string;
  graduationYear: number;
  course: string;
  profession: string;
  country: string;
  quote?: string;
  achievements?: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  type: 'Webinar' | 'Reunion' | 'Meeting';
  imageUrl: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  category: 'Projects' | 'Achievements' | 'Notices';
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  graduationYear: number;
}

export interface Document {
  id: number;
  title: string;
  type: 'Constitution' | 'Minutes' | 'Report' | 'Form';
  url: string;
}

export interface Benefit {
    // Fix: Changed React.ComponentType to ComponentType.
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
}
