import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";
import { IconProps } from ".";

const HamburgerIcon: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
  height = undefined,
  width = undefined,
}) => {
  const { fillColor } = useIconColor(variant);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fillColor}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export default HamburgerIcon;
