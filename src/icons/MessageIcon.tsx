import { FunctionComponent } from "react";
import useIconColor from "./useIconColor";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const MessageIcon: FunctionComponent<IconProps> = ({
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
      <g clip-path="url(#clip0_4_116)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.042 0.842582C18.2107 -0.464422 25.204 6.51602 23.7853 14.7008L23.7852 14.7014C22.9137 19.7126 18.8886 23.7499 13.8549 24.518C10.6944 25.0265 7.73149 24.2033 5.40893 22.682L3.638 23.529C2.08396 24.2964 0.225398 22.7864 0.862802 21.0811C0.863078 21.0804 0.863354 21.0796 0.863631 21.0789L1.69672 18.8295C0.45234 16.6343 -0.200566 13.9794 0.106076 11.2196L0.107589 11.206L0.107682 11.206C0.763028 5.96322 4.90246 1.71734 10.0322 0.844202L10.042 0.842533L10.042 0.842582ZM10.3629 2.81668C17.1918 1.72729 22.9954 7.54534 21.8147 14.3587C21.0865 18.546 17.7137 21.9077 13.5495 22.5414L13.5495 22.5414L13.5407 22.5428C10.733 22.9956 8.09799 22.183 6.08813 20.7213C5.79118 20.5053 5.39975 20.4695 5.0685 20.6279L2.7685 21.7279L2.75599 21.734C2.75539 21.7337 2.75477 21.7333 2.75414 21.733L3.73771 19.0773C3.8448 18.7882 3.81252 18.4658 3.65022 18.2037C2.45869 16.2789 1.82182 13.9036 2.09309 11.4473C2.64028 7.0948 6.09703 3.54504 10.3629 2.81668Z"
          fill={fillColor}
        />
        <path
          d="M8 13.73C8.55228 13.73 9 13.2823 9 12.73C9 12.1777 8.55228 11.73 8 11.73C7.44772 11.73 7 12.1777 7 12.73C7 13.2823 7.44772 13.73 8 13.73Z"
          fill={fillColor}
        />
        <path
          d="M12 13.73C12.5523 13.73 13 13.2823 13 12.73C13 12.1777 12.5523 11.73 12 11.73C11.4477 11.73 11 12.1777 11 12.73C11 13.2823 11.4477 13.73 12 13.73Z"
          fill={fillColor}
        />
        <path
          d="M16 13.73C16.5523 13.73 17 13.2823 17 12.73C17 12.1777 16.5523 11.73 16 11.73C15.4477 11.73 15 12.1777 15 12.73C15 13.2823 15.4477 13.73 16 13.73Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_116">
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

export default MessageIcon;
