import {
  ADD_PROJECTS,
  SET_SELECTED_PROJECT,
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
    default:
      return state;
  }
};

export default projectsReducer;
