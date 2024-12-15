import { FunctionComponent, ReactNode } from "react";
import styles from "./Swimlane.module.scss";
import Tab, { TabProps } from "./Tab";

interface SwimlaneProps {
  Tab?: ReactNode;
  children: ReactNode;
}
const Swimlane: FunctionComponent<SwimlaneProps> & {
  Tab: FunctionComponent<TabProps>;
} = ({ children }) => {
  return <section className={styles["swimlane"]}>{children}</section>;
};

Swimlane.Tab = Tab;

export default Swimlane;
