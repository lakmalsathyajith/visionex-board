import { FunctionComponent, ReactNode } from "react";
import styles from "./Swimlane.module.scss";
import Tab from "./Tab";

interface SwimlaneProps {
  children: ReactNode;
}
const Swimlane: FunctionComponent<SwimlaneProps> = ({ children }) => {
  return <section className={styles["swimlane"]}>{children}</section>;
};

interface SwimlaneWithTab extends FunctionComponent<SwimlaneProps> {
  Tab: typeof Tab;
}

(Swimlane as SwimlaneWithTab).Tab = Tab;

export default Swimlane;
