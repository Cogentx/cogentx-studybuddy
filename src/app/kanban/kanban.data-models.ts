export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  lablel?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}
