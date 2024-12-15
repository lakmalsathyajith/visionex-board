import { Project, Task } from "../../types/dataTypes";
import {
  ADD_PROJECTS,
  SET_SELECTED_PROJECT,
  UPDATE_TASK_STATUS,
} from "./../actiontypes/projectsActionTypes";

export interface ProjectState {
  projects: Project[];
  selectedProject: Project;
}

const initialState: ProjectState = {
  projects: [],
  selectedProject: {
    id: 1,
    name: "Sample Project",
    description: "",
    assigned: [],
    lastUpdated: "",
    tasks: [],
  },
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECTS:
      return {
        ...state,
        projects: [...action.payload],
      };
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: { ...action.payload },
      };
    case UPDATE_TASK_STATUS: {
      const { taskId, status } = action.payload;
      let tasks: Task[] = [];
      if (state.selectedProject) {
        tasks = state.selectedProject?.tasks.map((task: Task) =>
          task.id === taskId ? { ...task, status } : task
        );
      }

      return {
        ...state,
        selectedProject: { ...state.selectedProject, tasks: [...tasks] },
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
