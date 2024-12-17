import { FunctionComponent, ReactElement } from "react";
import { Card } from "@components";
import { Plus2Icon, DotsIcon } from "@icons";
import styles from "./../Swimlane.module.scss";
import { useSwimlaneContext } from "../../../context/SwimlaneContext";
import { Task } from "../../../types/dataTypes";

export interface TabProps {
  label: ReactElement;
  data: Task[];
  id: string;
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
      {data && data.map((data) => <Card data={data} key={data.id} />)}
    </div>
  );
};

export default Tab;
