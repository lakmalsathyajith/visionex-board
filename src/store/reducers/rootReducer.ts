import { combineReducers } from "redux";
import projects, { ProjectState } from "./projectsReducer";

export type RootState = {
  projects: ProjectState;
};

const rootReducer = combineReducers({ projects });

export default rootReducer;
