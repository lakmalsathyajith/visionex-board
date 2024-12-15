import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active" | "faded";
  className?: string;
  height?: number;
  width?: number;
}

const FlashIcon: FunctionComponent<IconProps> = ({
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
      <g clipPath="url(#clip0_3_12)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3609 13.73L11.376 19.6396L17.0885 11.73H11.6391L12.624 5.8204L6.91151 13.73H12.3609ZM15.2984 1.93961C15.4722 0.896971 14.1202 0.332816 13.5013 1.18972L4.14508 14.1445C3.66745 14.8059 4.13999 15.73 4.95576 15.73H10L8.7016 23.5204C8.52782 24.5631 9.8798 25.1272 10.4987 24.2703L19.8549 11.3155C20.3326 10.6542 19.86 9.73002 19.0442 9.73002H14L15.2984 1.93961Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_12">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.730011)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FlashIcon;
