import { FunctionComponent, ReactElement } from "react";
import Card from "../../../components/Card";
import DotsIcon from "../../../icons/DotsIcon";
import Plus2Icon from "../../../icons/Plus2Icon";
import styles from "./../Swimlane.module.scss";
import { useSwimlaneContext } from "../../../context/SwimlaneContext";

interface TabProps {
  label: ReactElement;
}
const Tab: FunctionComponent<TabProps> = ({ label, data, id }) => {
  const { onDragEnter, onDrop } = useSwimlaneContext();
  return (
    <div
      className={styles["swimlane__tab"]}
      onDrop={(e) => onDrop(e, id)}
      onDragEnter={onDragEnter}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={styles["swimlane__header"]}>
        {label}
        <div className={styles["swimlane__actions"]}>
          <Plus2Icon />
          <DotsIcon />
        </div>
      </div>
      {data && data.map((data) => <Card data={data} />)}
    </div>
  );
};

export default Tab;
