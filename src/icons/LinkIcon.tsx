import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active" | "faded";
  className?: string;
  height?: number;
  width?: number;
}

const LinkIcon: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = 24,
  width = 24,
}) => {
  const { activeColor, defaultColor, fadedColor } = useIconColor();

  let fillColor = defaultColor;
  switch (variant) {
    case "active":
      fillColor = activeColor;
      break;
    case "faded":
      fillColor = fadedColor;
      break;
    default:
      fillColor = defaultColor;
      break;
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fillColor}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 6.36545C14.2691 4.80335 16.8018 4.80335 18.3638 6.36545C19.926 7.92762 19.9257 10.4605 18.3637 12.0225L16.2425 14.1436C15.852 14.5342 15.2188 14.5341 14.8283 14.1436C14.4378 13.7531 14.4378 13.1199 14.8283 12.7294L16.9495 10.6083C17.7306 9.82714 17.7306 8.56064 16.9496 7.77966C16.1686 6.99862 14.9023 6.99862 14.1212 7.77966L11.9999 9.90098C11.6094 10.2915 10.9762 10.2915 10.5857 9.90098C10.1952 9.51046 10.1952 8.8773 10.5857 8.48677L12.707 6.36545ZM15.5354 9.19389C15.9259 9.58442 15.9259 10.2176 15.5354 10.6081L9.87853 16.265C9.488 16.6555 8.85484 16.6555 8.46431 16.265C8.07379 15.8744 8.07379 15.2413 8.46431 14.8507L14.1212 9.19389C14.5117 8.80337 15.1449 8.80337 15.5354 9.19389ZM9.17146 11.3152C9.56199 11.7057 9.56199 12.3389 9.17146 12.7294L7.05014 14.8507C6.26909 15.6318 6.26909 16.8981 7.05014 17.6792C7.83111 18.4601 9.09762 18.4601 9.87874 17.679L11.9999 15.5578C12.3904 15.1673 13.0236 15.1673 13.4141 15.5578C13.8046 15.9484 13.8046 16.5815 13.4141 16.9721L11.293 19.0932C9.73093 20.6552 7.1981 20.6555 5.63593 19.0934C4.07383 17.5313 4.07383 14.9986 5.63593 13.4365L7.75725 11.3152C8.14777 10.9247 8.78094 10.9247 9.17146 11.3152Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default LinkIcon;
