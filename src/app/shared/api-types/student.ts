import { Lesson } from './lesson';

export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface StudentEmbedLessons {
  id: number;
  name: string;
  email: string;
  lessons: Array<Lesson>;
}
