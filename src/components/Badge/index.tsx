import { FunctionComponent } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  variant: "todo" | "inprogress" | "approved" | "reject";
}

/**
 * MyComponent is a reusable button component.
 *
 * @param {variant} - The text to display inside the button.
 */
const Badge: FunctionComponent<BadgeProps> = ({ variant }) => {
  let label = "";
  const className = `${styles["badge"]} ${styles["badge--" + variant]}`;
  switch (variant) {
    case "approved":
      label = "Approved";
      break;
    case "inprogress":
      label = "In Progress";
      break;
    case "reject":
      label = "Reject";
      break;
    default:
      label = "To Do";
      break;
  }
  return <h2 className={className}>{label}</h2>;
};

export default Badge;
