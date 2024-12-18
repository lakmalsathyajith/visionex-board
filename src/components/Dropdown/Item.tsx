import React, { ReactNode } from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownItemProps {
  children: ReactNode;
}

const Item: React.FC<DropdownItemProps> = ({ children }) => {
  return <div className={styles["dropdown__item"]}>{children}</div>;
};

export default Item;
