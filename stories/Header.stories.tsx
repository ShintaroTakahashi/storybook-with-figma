import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Header } from "../components/templates/TestPage/molecules/Header";

type HeaderStory = ComponentStoryObj<typeof Header>;

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const LoggedIn: HeaderStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=34%3A25",
    },
  },
  args: {
    isLogin: true,
  },
};

export const LoggedOut: HeaderStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A45",
    },
  },

  args: {},
};
