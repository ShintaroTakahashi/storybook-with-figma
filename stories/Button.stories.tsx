import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

type ButtonStory = ComponentStoryObj<typeof Button>;

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

export const Primary: ButtonStory = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "  https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/test_buton",
    },
  },
};

export const Secondary: ButtonStory = {
  args: {
    label: "Button",
  },
};

export const Large: ButtonStory = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: ButtonStory = {
  args: {
    size: "small",
    label: "Button",
  },
};
