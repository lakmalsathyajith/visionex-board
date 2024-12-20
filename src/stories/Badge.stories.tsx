import { fn } from "@storybook/test";

import Task from "../components/Badge";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: "Badge",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    variant: "todo",
  },
};

export const inprogress = {
  args: {
    variant: "inprogress",
  },
};

export const approved = {
  args: {
    variant: "approved",
  },
};

export const reject = {
  args: {
    variant: "reject",
  },
};
