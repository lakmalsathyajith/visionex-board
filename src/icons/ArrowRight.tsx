import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const ArrowRightIcon: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = 24,
  width = 24,
}) => {
  const { activeColor, defaultColor } = useIconColor();

  const fillColor = variant === "active" ? activeColor : defaultColor;
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79289 8.5229C9.40237 8.91343 9.40237 9.54659 9.79289 9.93712L12.5858 12.73L9.79289 15.5229C9.40237 15.9134 9.40237 16.5466 9.79289 16.9371C10.1834 17.3276 10.8166 17.3276 11.2071 16.9371L14.7071 13.4371C15.0976 13.0466 15.0976 12.4134 14.7071 12.0229L11.2071 8.5229C10.8166 8.13238 10.1834 8.13238 9.79289 8.5229Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowRightIcon;
