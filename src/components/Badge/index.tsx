import { FunctionComponent } from "react";
import styles from "./Badge.module.scss";
import { Variant } from "@src/types/dataTypes";

interface BadgeProps {
  variant: Variant;
  className?: string;
}

/**
 * MyComponent is a reusable button component.
 *
 * @param {variant} - The text to display inside the button.
 */
const Badge: FunctionComponent<BadgeProps> = ({ variant, className }) => {
  let label = "";
  const classNames = `${styles["badge"]} ${
    styles["badge--" + variant]
  } ${className}`;
  switch (variant) {
    case "approved":
      label = "Approved";
      break;
    case "in-progress":
      label = "In Progress";
      break;
    case "reject":
      label = "Reject";
      break;
    default:
      label = "To Do";
      break;
  }
  return <h2 className={classNames}>{label}</h2>;
};

export default Badge;
