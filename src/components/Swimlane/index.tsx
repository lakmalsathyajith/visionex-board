import { FunctionComponent, ReactNode } from "react";
import styles from "./Swimlane.module.scss";
import Tab from "./Tab";

interface SwimlaneProps {
  children: ReactNode;
  Tab: ReactNode;
}
const Swimlane: FunctionComponent<SwimlaneProps> = ({ children }) => {
  return <section className={styles["swimlane"]}>{children}</section>;
};

Swimlane.Tab = Tab;

export default Swimlane;
