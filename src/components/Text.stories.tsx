// import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsun.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
};

export const Default = {};

export const Small = {
  args: {
    size: "sm",
  },
};
export const Large = {
  args: {
    size: "lg",
  },
};
export const CustomComponent = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
    },
    asChild: {
      table: {
        disabled: true,
      },
    },
  },
};
