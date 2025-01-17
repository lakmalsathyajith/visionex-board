import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";
import { IconProps } from ".";

const ArrowDown: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = 24,
  width = 24,
}) => {
  const { fillColor } = useIconColor(variant);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79289 14.9371C8.18342 15.3276 8.81658 15.3276 9.20711 14.9371L12 12.1442L14.7929 14.9371C15.1834 15.3276 15.8166 15.3276 16.2071 14.9371C16.5976 14.5466 16.5976 13.9134 16.2071 13.5229L12.7071 10.0229C12.3166 9.63238 11.6834 9.63238 11.2929 10.0229L7.79289 13.5229C7.40237 13.9134 7.40237 14.5466 7.79289 14.9371Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowDown;
