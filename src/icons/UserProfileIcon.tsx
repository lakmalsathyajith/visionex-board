import { FunctionComponent } from "react";

interface IconProps {
  variant?: "default" | "active";
  className?: string;
  height?: number;
  width?: number;
}

const UserProfileIcon: FunctionComponent<IconProps> = ({
  className = "",
  height = 24,
  width = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" transform="translate(1 1)" fill="" />
      <circle cx="16" cy="16" r="15.5" fill="#353945" stroke="white" />
      <path
        d="M11.0937 19.651L11.0833 19.6614C10.9427 19.3542 10.8541 19.0052 10.8177 18.6198C10.8541 19 10.9531 19.3437 11.0937 19.651Z"
        fill="white"
      />
      <path
        d="M14.4375 15.1563C15.1221 15.1563 15.6771 14.6013 15.6771 13.9167C15.6771 13.2321 15.1221 12.6771 14.4375 12.6771C13.7529 12.6771 13.1979 13.2321 13.1979 13.9167C13.1979 14.6013 13.7529 15.1563 14.4375 15.1563Z"
        fill="white"
      />
      <path
        d="M18.1823 10.7917H13.8177C11.9219 10.7917 10.7917 11.9219 10.7917 13.8177V18.1823C10.7917 18.75 10.8906 19.2448 11.0834 19.6614C11.5313 20.651 12.4896 21.2083 13.8177 21.2083H18.1823C20.0781 21.2083 21.2084 20.0781 21.2084 18.1823V16.9896V13.8177C21.2084 11.9219 20.0781 10.7917 18.1823 10.7917ZM20.3594 16.2604C19.9531 15.9114 19.2969 15.9114 18.8906 16.2604L16.724 18.1198C16.3177 18.4687 15.6615 18.4687 15.2552 18.1198L15.0781 17.9739C14.7084 17.651 14.1198 17.6198 13.7031 17.901L11.7552 19.2083C11.6406 18.9167 11.5729 18.5781 11.5729 18.1823V13.8177C11.5729 12.3489 12.349 11.5729 13.8177 11.5729H18.1823C19.6511 11.5729 20.4271 12.3489 20.4271 13.8177V16.3177L20.3594 16.2604Z"
        fill="white"
      />
    </svg>
  );
};

export default UserProfileIcon;