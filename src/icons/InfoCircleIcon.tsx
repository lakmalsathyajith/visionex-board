import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const InfoCircleIcon: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = 24,
  width = 24,
}) => {
  const { activeColor, defaultColor } = useIconColor();

  const fillColor = variant === "active" ? activeColor : defaultColor;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.73C16.4183 20.73 20 17.1483 20 12.73C20 8.31173 16.4183 4.73001 12 4.73001C7.58172 4.73001 4 8.31173 4 12.73C4 17.1483 7.58172 20.73 12 20.73ZM12 22.73C17.5228 22.73 22 18.2529 22 12.73C22 7.20716 17.5228 2.73001 12 2.73001C6.47715 2.73001 2 7.20716 2 12.73C2 18.2529 6.47715 22.73 12 22.73Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.73001C11.4477 7.73001 11 8.17773 11 8.73001C11 9.2823 11.4477 9.73001 12 9.73001C12.5523 9.73001 13 9.2823 13 8.73001C13 8.17773 12.5523 7.73001 12 7.73001ZM12 11.73C11.4477 11.73 11 12.1777 11 12.73V16.73C11 17.2823 11.4477 17.73 12 17.73C12.5523 17.73 13 17.2823 13 16.73V12.73C13 12.1777 12.5523 11.73 12 11.73Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default InfoCircleIcon;
