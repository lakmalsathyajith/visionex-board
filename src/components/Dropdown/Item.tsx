import React, { ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import { ArrowRightIcon } from "@src/icons";

export interface DropdownItemProps {
  children: ReactNode;
  onClick: () => void;
}

const Item: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <div className={styles["dropdown__item"]} onClick={onClick}>
      <ArrowRightIcon className={styles["dropdown__item-icon"]} />
      {children}
    </div>
  );
};

export default Item;
