import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "../components/templates/TestPage/atoms/Button";

type ButtonStory = ComponentStoryObj<typeof Button>;

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ButtonStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=217%3A2",
    },
  },
  args: {
    children: "Button",
  },
};

export const Disabled: ButtonStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=217%3A37",
    },
  },
  args: {
    disabled: true,
    children: "Button",
  },
};
