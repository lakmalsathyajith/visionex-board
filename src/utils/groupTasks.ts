import { Task } from "../types/dataTypes";

type GroupedTasks = {
  todo: Task[];
  "in-progress": Task[];
  approved: Task[];
  rejected: Task[];
};

const initialGroupedTasks: GroupedTasks = {
  todo: [],
  "in-progress": [],
  approved: [],
  rejected: [],
};

function groupByStatus(tasks: Task[] = []) {
  return tasks.reduce((grouped: GroupedTasks, task: Task) => {
    return {
      ...grouped,
      [task.status]: [...grouped[task.status], task],
    };
  }, initialGroupedTasks);
}

export default groupByStatus;
