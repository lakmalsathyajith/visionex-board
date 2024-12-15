import { Dispatch } from "redux";
import {
  ADD_PROJECTS,
  SET_SELECTED_PROJECT,
  UPDATE_TASK_STATUS,
} from "../actiontypes/projectsActionTypes";
import { Project } from "../../types/dataTypes";

export const fetchProjects = () => (dispatch: Dispatch) => {
  fetch("./../../../data/tasks.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch task data");
      }
      return response.json();
    })
    .then((data) => {
      return dispatch({
        type: ADD_PROJECTS,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });
};

export const setSelectedProject = (project: Project) => {
  return {
    type: SET_SELECTED_PROJECT,
    payload: project,
  };
};

export const updateTaskStatus =
  (taskId: number, status: string) => (dispatch: Dispatch) => {
    return dispatch({
      type: UPDATE_TASK_STATUS,
      payload: { taskId, status },
    });
  };
