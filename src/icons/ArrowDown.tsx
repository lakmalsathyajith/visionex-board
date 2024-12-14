import { FunctionComponent } from "react";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
}

const ArrowDown: FunctionComponent<IconProps> = ({
  variant = "default",
  className = "",
}) => {
  const defaultColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--default-icon-color")
    .trim();
  const activeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--active-icon-color")
    .trim();

  const fillColor = variant === "active" ? activeColor : defaultColor;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={fillColor}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2071 10.5229C15.8166 10.1324 15.1834 10.1324 14.7929 10.5229L12 13.3158L9.20711 10.5229C8.81658 10.1324 8.18342 10.1324 7.79289 10.5229C7.40237 10.9134 7.40237 11.5466 7.79289 11.9371L11.2929 15.4371C11.6834 15.8276 12.3166 15.8276 12.7071 15.4371L16.2071 11.9371C16.5976 11.5466 16.5976 10.9134 16.2071 10.5229Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowDown;