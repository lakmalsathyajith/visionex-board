import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active" | "faded";
  className?: string;
  height?: number;
  width?: number;
}

const PencilIcon: FunctionComponent<IconProps> = ({
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
      className={className}
      viewBox="0 0 24 25"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.02264 19.1279L2.74729 15.867C2.91231 15.1243 3.28569 14.4442 3.82361 13.9063L13.6715 4.05832C15.2336 2.49623 17.7663 2.49622 19.3284 4.05832L20.6715 5.40147C22.2336 6.96356 22.2336 9.49622 20.6715 11.0583L10.8236 20.9063C10.2857 21.4442 9.60552 21.8175 8.8629 21.9826L5.60199 22.7072C3.4585 23.1836 1.54631 21.2714 2.02264 19.1279ZM4.69966 16.3008L3.97501 19.5617C3.81624 20.2762 4.45363 20.9136 5.16813 20.7548L8.42904 20.0302C8.78614 19.9508 9.11436 19.7751 9.37821 19.5226L5.20731 15.3517C4.95472 15.6155 4.77902 15.9437 4.69966 16.3008ZM6.62118 13.9371L10.7928 18.1087L16.3785 12.5229L12.207 8.35132L6.62118 13.9371ZM19.2573 9.64411L17.7928 11.1087L13.6212 6.9371L15.0857 5.47254C15.8668 4.69149 17.1331 4.69149 17.9142 5.47253L19.2573 6.81568C20.0384 7.59673 20.0384 8.86306 19.2573 9.64411Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PencilIcon;