import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import projects from "./projectsReducer";

const rootReducer = combineReducers({ tasks, projects });

export default rootReducer;
