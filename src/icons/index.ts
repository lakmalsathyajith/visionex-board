import { FC } from "react";

export interface IconProps {
  variant?: "primary" | "default" | "active" | "faded";
  className?: string;
  height?: number;
  width?: number;
  currentColor?: boolean;
}
export type IconType = FC<React.SVGProps<SVGSVGElement>>;

import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import ArrowLeft from "./ArrowLeft";
import ArrowRightIcon from "./ArrowRight";
import CalendarIcon from "./CalendarIcon";
import DashboardIcon from "./DashboardIcon";
import DotsIcon from "./DotsIcon";
import FlashIcon from "./FlashIcon";
import FolderIcon from "./FolderIcon";
import InfoCircleIcon from "./InfoCircleIcon";
import LinkIcon from "./LinkIcon";
import MessageIcon from "./MessageIcon";
import PencilIcon from "./PencilIcon";
import Plus2Icon from "./Plus2Icon";
import SignOutIcon from "./SignOutIcon";
import UserIcon from "./UserIcon";
import UserProfileIcon from "./UserProfileIcon";

export {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRightIcon,
  CalendarIcon,
  DashboardIcon,
  DotsIcon,
  FlashIcon,
  InfoCircleIcon,
  LinkIcon,
  MessageIcon,
  PencilIcon,
  UserProfileIcon,
  Plus2Icon,
  UserIcon,
  FolderIcon,
  SignOutIcon,
};
