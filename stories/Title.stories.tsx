import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Title } from "../components/templates/TestPage/atoms/Title";

type TitleStory = ComponentStoryObj<typeof Title>;

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: TitleStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A48",
    },
  },
  args: {
    children: "Dummy list",
  },
};

export const Large: TitleStory = {
  parameters: {
    design: {
      type: "figma",
      // frameをPage直下に置けば表示可能
      url: "https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A54",
    },
  },
  args: {
    size: "large",
    children: "This is Header",
  },
};
