import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TestPage } from "../components/templates/TestPage";

type TestPageStory = ComponentStoryObj<typeof TestPage>;

export default {
  component: TestPage,
} as ComponentMeta<typeof TestPage>;

export const LoggedIn: TestPageStory = {
  parameters: {
    design: {
      type: "figma",
      // frame(≒アートボード)単位のURL(ネストされた子frameはURLを取れない)
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=34%3A13",
    },
  },
  args: {
    isLogin: true,
  },
};

export const LoggedOut: TestPageStory = {
  parameters: {
    design: {
      type: "figma",
      // frame(≒アートボード)単位のURL(ネストされた子frameはURLを取れない)
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=29%3A2",
    },
  },
  args: {
    isLogin: false,
  },
};

export const PagePattern: TestPageStory = {
  parameters: {
    design: {
      type: "figma",
      // flame指定なし -> Page単位のURL
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=0%3A1",
    },
  },
  args: {
    isLogin: false,
  },
};
