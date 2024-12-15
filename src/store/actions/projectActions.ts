import {
  ADD_PROJECTS,
  SET_SELECTED_PROJECT,
} from "../actiontypes/projectsActionTypes";

export const fetchProjects = () => (dispatch) => {
  const projects = [];
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

export const setSelectedProject = (project) => {
  return {
    type: SET_SELECTED_PROJECT,
    payload: project,
  };
};
