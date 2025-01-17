import { FunctionComponent, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Dropdown.module.scss"; // Import CSS for animation classes
import Item, { DropdownItemProps } from "./Item";
import { ArrowDown, ArrowUp, FolderIcon } from "@src/icons";

interface DropdownProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Dropdown: FunctionComponent<DropdownProps> & {
  Item: FunctionComponent<DropdownItemProps>;
} = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles["dropdown"]}  ${className}`}>
      <div
        className={`${styles["dropdown__container"]} ${
          isOpen ? styles["dropdown__container--active"] : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className={styles["dropdown__toggle"]}>
          <div className={styles["dropdown__toggle-title"]}>
            <FolderIcon />
            {title}
          </div>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={`${styles["dropdown__menu"]} ${
            isOpen ? styles["dropdown__menu--active"] : ""
          }`}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

Dropdown.Item = Item;

export default Dropdown;
