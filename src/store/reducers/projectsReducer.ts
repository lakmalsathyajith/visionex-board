import { Task } from "../../types/dataTypes";
import {
  ADD_PROJECTS,
  SET_SELECTED_PROJECT,
  UPDATE_TASK_STATUS,
} from "./../actiontypes/projectsActionTypes";

const initialState = {
  projects: [],
  selectedProject: {},
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
      const { tasks } = state.selectedProject;
      const { taskId, status } = action.payload;
      tasks.forEach((task: Task) => {
        if (task.id === taskId) task.status = status;
      });

      console.log("------", taskId, status, tasks);
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
