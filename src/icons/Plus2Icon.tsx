import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const Plus2Icon: FunctionComponent<IconProps> = ({
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
      className={className}
      viewBox="0 0 24 25"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7.73001C13 7.17773 12.5523 6.73001 12 6.73001C11.4477 6.73001 11 7.17773 11 7.73001V11.73H7C6.44772 11.73 6 12.1777 6 12.73C6 13.2823 6.44772 13.73 7 13.73H11V17.73C11 18.2823 11.4477 18.73 12 18.73C12.5523 18.73 13 18.2823 13 17.73V13.73H17C17.5523 13.73 18 13.2823 18 12.73C18 12.1777 17.5523 11.73 17 11.73H13V7.73001Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Plus2Icon;
