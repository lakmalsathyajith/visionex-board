import { FunctionComponent, ReactNode } from "react";
import styles from "./Swimlane.module.scss";
import Tab, { TabProps } from "./Tab";
import { SwimlaneContextProvider } from "@src/context/SwimlaneContext";

interface SwimlaneProps {
  Tab?: ReactNode;
  children: ReactNode;
}
const Swimlane: FunctionComponent<SwimlaneProps> & {
  Tab: FunctionComponent<TabProps>;
} = ({ children }) => {
  return (
    <section className={styles["swimlane"]}>
      <SwimlaneContextProvider>{children}</SwimlaneContextProvider>
    </section>
  );
};

Swimlane.Tab = Tab;

export default Swimlane;
