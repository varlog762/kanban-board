export type ID = string;

export interface Column {
  id: ID;
  title: string;
  tasks: Task[];
}

export interface Task {
  title: string;
  createdAt: Date;
  id: ID;
}
