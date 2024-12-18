import { FunctionComponent } from "react";
import {
  DotsIcon,
  UserProfileIcon,
  LinkIcon,
  MessageIcon,
  FlashIcon,
  CalendarIcon,
} from "@icons";
import getSlicedElementsAndRestCount from "@utils/getSlicedElementsAndRestCount";
import { useSwimlaneContext } from "../../context/SwimlaneContext";
import { Task } from "../../types/dataTypes";
import styles from "./Card.module.scss";

interface CardProps {
  data: Task;
}

const Card: FunctionComponent<CardProps> = ({ data }) => {
  const { id, category, title, priority, users, subtasks, comments } = data;
  const { slicedElements, restCount } = getSlicedElementsAndRestCount(users, 3);

  const { onDragStart, onDragEnd } = useSwimlaneContext();

  return (
    <div
      className={styles["card"]}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragEnd={onDragEnd}
    >
      <div className={styles["card__top-bar"]}>
        <div className={styles["card__category"]}>
          <span className={styles["card__category-color"]} />
          {category}
        </div>
        <DotsIcon height={14} width={14} />
      </div>
      <h3 className={styles["card__title"]}>{title}</h3>
      <div className={styles["card__assigned"]}>
        <div className={styles["card__assigned-user"]}>
          {slicedElements.map((element) => (
            <UserProfileIcon
              key={element}
              height={20}
              width={20}
              className={styles["card__assigned-icon"]}
            />
          ))}
          {restCount > 0 ? (
            <div className={styles["card__assigned-extra-icon"]}>
              +{restCount}
            </div>
          ) : null}
        </div>
        <div className={styles["card__assigned-label"]}>
          <FlashIcon width={12} height={12} variant="faded" /> {priority}
        </div>
      </div>
      <div className={styles["card__divider"]}></div>
      <div className={styles["card__footer-bar"]}>
        <div className={styles["card__footer-links"]}>
          <LinkIcon width={16} height={16} /> {subtasks}
        </div>
        <div className={styles["card__footer-messages"]}>
          <MessageIcon width={16} height={16} /> {comments}
        </div>
        <div className={styles["card__footer-calendar"]}>
          <CalendarIcon width={16} height={16} variant="faded" /> Due: Tomorrow
        </div>
      </div>
    </div>
  );
};

export default Card;
