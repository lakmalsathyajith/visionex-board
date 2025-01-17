import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const UserIcon: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = 24,
  width = 24,
}) => {
  const { fillColor } = useIconColor(variant);
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
        d="M12 13.73C8.13401 13.73 5 16.864 5 20.73V22.73C5 23.2823 4.55228 23.73 4 23.73C3.44772 23.73 3 23.2823 3 22.73V20.73C3 15.7594 7.02944 11.73 12 11.73C16.9706 11.73 21 15.7594 21 20.73V22.73C21 23.2823 20.5523 23.73 20 23.73C19.4477 23.73 19 23.2823 19 22.73V20.73C19 16.864 15.866 13.73 12 13.73Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.73C14.2091 11.73 16 9.93915 16 7.73001C16 5.52087 14.2091 3.73001 12 3.73001C9.79086 3.73001 8 5.52087 8 7.73001C8 9.93915 9.79086 11.73 12 11.73ZM12 13.73C15.3137 13.73 18 11.0437 18 7.73001C18 4.4163 15.3137 1.73001 12 1.73001C8.68629 1.73001 6 4.4163 6 7.73001C6 11.0437 8.68629 13.73 12 13.73Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default UserIcon;
