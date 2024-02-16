export interface Task {
  id: string;
  title: string;
  priority: string;
  column: string;
}

export interface TaskList {
  [key: string]: Task[];
}
