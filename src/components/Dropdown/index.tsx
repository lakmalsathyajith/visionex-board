import { FunctionComponent, ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Dropdown.module.scss"; // Import CSS for animation classes
import Item, { DropdownItemProps } from "./Item";
import { ArrowDown, FolderIcon } from "@src/icons";

interface DropdownProps {
  title: string;
  children: ReactNode;
}

const Dropdown: FunctionComponent<DropdownProps> & {
  Item: FunctionComponent<DropdownItemProps>;
} = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["dropdown"]} onClick={toggleDropdown}>
      <div className={styles["dropdown__toggle"]}>
        <div className={styles["dropdown__toggle-title"]}>
          <FolderIcon />
          {title}
        </div>
        <ArrowDown />
      </div>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className={styles["dropdown__menu"]}>{children}</div>
      </CSSTransition>
    </div>
  );
};

Dropdown.Item = Item;

export default Dropdown;
