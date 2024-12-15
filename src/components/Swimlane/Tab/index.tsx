import { FunctionComponent, ReactElement } from "react";
import Card from "../../../components/Card";
import DotsIcon from "../../../icons/DotsIcon";
import Plus2Icon from "../../../icons/Plus2Icon";
import styles from "./../Swimlane.module.scss";

interface TabProps {
  label: ReactElement;
}
const Tab: FunctionComponent<TabProps> = ({ label }) => {
  return (
    <div className={styles["swimlane__tab"]}>
      <div className={styles["swimlane__header"]}>
        {label}
        {/* <h2 className={styles["swimlane__title"]}>{label}</h2> */}
        <div className={styles["swimlane__actions"]}>
          <Plus2Icon />
          <DotsIcon />
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Tab;
