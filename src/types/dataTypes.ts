export type Variant = "todo" | "in-progress" | "approved" | "reject";
export interface Task {
  id: number;
  category: string;
  title: string;
  priority: string;
  status: Variant;
  users: number[];
  subtasks: number;
  comments: number;
  dueDate?: string;
  link?: string;
  reports?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  assigned: number[];
  lastUpdated: string;
  tasks: Task[];
  status: Variant;
}
