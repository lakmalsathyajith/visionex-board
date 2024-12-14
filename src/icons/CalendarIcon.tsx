import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const CalendarIcon: FunctionComponent<IconProps> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 6.73001H5C4.44772 6.73001 4 7.17773 4 7.73001V19.73C4 20.2823 4.44772 20.73 5 20.73H19C19.5523 20.73 20 20.2823 20 19.73V7.73001C20 7.17773 19.5523 6.73001 19 6.73001ZM5 4.73001C3.34315 4.73001 2 6.07316 2 7.73001V19.73C2 21.3869 3.34315 22.73 5 22.73H19C20.6569 22.73 22 21.3869 22 19.73V7.73001C22 6.07316 20.6569 4.73001 19 4.73001H5Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 12.73C9.44772 12.73 9 13.1777 9 13.73C9 14.2823 9.44772 14.73 10 14.73H17C17.5523 14.73 18 14.2823 18 13.73C18 13.1777 17.5523 12.73 17 12.73H10ZM7 16.73C6.44772 16.73 6 17.1777 6 17.73C6 18.2823 6.44772 18.73 7 18.73H13C13.5523 18.73 14 18.2823 14 17.73C14 17.1777 13.5523 16.73 13 16.73H7Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2.73001C6.44772 2.73001 6 3.17773 6 3.73001V7.73001C6 8.2823 6.44772 8.73001 7 8.73001C7.55228 8.73001 8 8.2823 8 7.73001V3.73001C8 3.17773 7.55228 2.73001 7 2.73001ZM17 2.73001C16.4477 2.73001 16 3.17773 16 3.73001V7.73001C16 8.2823 16.4477 8.73001 17 8.73001C17.5523 8.73001 18 8.2823 18 7.73001V3.73001C18 3.17773 17.5523 2.73001 17 2.73001Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CalendarIcon;