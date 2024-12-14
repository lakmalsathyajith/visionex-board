import CalendarIcon from "../../../icons/CalendarIcon";
import DashboardIcon from "../../../icons/DashboardIcon";
import FolderIcon from "../../../icons/FolderIcon";
import InfoCircleIcon from "../../../icons/InfoCircleIcon";
import MessageIcon from "../../../icons/MessageIcon";
import SignOutIcon from "../../../icons/SignOutIcon";
import UserIcon from "../../../icons/UserIcon";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
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
            <FolderIcon className={styles["sidebar__menu-item-icon"]} />
            Boards
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
