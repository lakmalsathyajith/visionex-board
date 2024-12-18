import { useDispatch, useSelector } from "react-redux";
import {
  ArrowRightIcon,
  CalendarIcon,
  DashboardIcon,
  InfoCircleIcon,
  MessageIcon,
  SignOutIcon,
  UserIcon,
} from "@icons";
import styles from "./Sidebar.module.scss";
import { RootState } from "@store/reducers/rootReducer";
import { setSelectedProject } from "@store/actions/projectActions";
import { Project } from "../../../types/dataTypes";
import { TypedDispatch } from "@store";
import { Dropdown } from "@src/components";

const Sidebar = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const { projects } = useSelector((state: RootState) => state.projects);
  const setProject = (project: Project) => {
    dispatch(setSelectedProject(project));
  };
  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebar__workspace"]}>
        <div className={styles["sidebar__workspace-main"]}>
          <img
            className={styles["sidebar__workspace-logo-image"]}
            src="assets/icons/User profile.svg"
            alt="Workspace logo"
          />
          <div className={styles["sidebar__workspace-details"]}>
            <h3 className={styles["sidebar__workspace-title"]}>workspace</h3>
            <h2 className={styles["sidebar__workspace-folder"]}>Root folder</h2>
          </div>
        </div>
        <img
          className={styles["sidebar__workspace-dropdown-icon"]}
          src="assets/icons/Arrow Down.svg"
          alt="Dropdown icon"
        />
      </div>

      <nav className={styles["sidebar__menu"]}>
        <ul className={styles["sidebar__menu-list"]}>
          <li className={styles["sidebar__menu-item"]}>
            <DashboardIcon className={styles["sidebar__menu-item-icon"]} />
            Dashboard
          </li>
          <li className={styles["sidebar__menu-item"]}>
            <Dropdown title="Boards">
              {projects.map((project) => (
                <Dropdown.Item
                  key={project.id}
                  onClick={() => setProject(project)}
                >
                  <ArrowRightIcon />
                  {project.name}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </li>
          <li className={styles["sidebar__menu-item"]}>
            <MessageIcon className={styles["sidebar__menu-item-icon"]} />
            Messages
          </li>
          <li className={styles["sidebar__menu-item"]}>
            <CalendarIcon className={styles["sidebar__menu-item-icon"]} />
            Calendar
          </li>
          <li className={styles["sidebar__menu-item"]}>
            <UserIcon className={styles["sidebar__menu-item-icon"]} />
            Team Members
          </li>
        </ul>
      </nav>
      <div className={styles["sidebar__menu-global"]}>
        <div className={styles["sidebar__menu-item"]}>
          <InfoCircleIcon className={styles["sidebar__menu-item-icon"]} />
          Support
        </div>
        <button className={styles["sidebar__menu-logout"]}>
          <SignOutIcon className={styles["sidebar__menu-logout-icon"]} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
