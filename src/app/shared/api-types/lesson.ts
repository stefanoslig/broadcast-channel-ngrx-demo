import { Status } from './status';

export interface Lesson {
  id: number;
  name: string;
  status: Status;
  userId: number;
}
