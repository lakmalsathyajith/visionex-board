import { FolderIcon, ArrowRightIcon } from "@icons";
import styles from "./Dropdown.module.scss";
const Dropdown = () => {
  return (
    <>
      <li className={styles["sidebar__menu-item"]}>
        <FolderIcon className={styles["sidebar__menu-item-icon"]} />
        Boards
        <img
          className={styles["sidebar__workspace-dropdown-icon"]}
          src="assets/icons/Arrow Down.svg"
          alt="Dropdown icon"
        />
      </li>
      <ul className={styles["sidebar__dropdown-list"]}>
        <li className={styles["sidebar__dropdown-item"]}>
          <ArrowRightIcon />
          Create Routes
        </li>
        <li className={styles["sidebar__dropdown-item"]}>
          <ArrowRightIcon />
          Create Routes
        </li>
        <li className={styles["sidebar__dropdown-item"]}>
          <ArrowRightIcon />
          Create Routes
        </li>
        <li className={styles["sidebar__dropdown-item"]}>
          <ArrowRightIcon />
          Create Routes
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
