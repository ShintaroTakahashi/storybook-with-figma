import { ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {
  args: {},
};
