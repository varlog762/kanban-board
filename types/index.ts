export type ID = string;

export interface Column {
  id: ID;
  tittle: string;
  tasks: Task[];
}

export interface Task {
  tittle: string;
  createdAt: Date;
  id: ID;
}
