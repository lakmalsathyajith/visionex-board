import { fn } from "@storybook/test";

import Task from "./index";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: "Badge",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
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
