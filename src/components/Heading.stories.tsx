// import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
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
    children: <h1>Heading with h1</h1>,
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
      }
    }
  },
};
